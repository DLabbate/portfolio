import { allBlogs, Blog } from "../../../.contentlayer/generated";
import { compareAsc, parseISO, compareDesc } from "date-fns";
import { getAllBlogViews } from "../db";

type FormattedBlog = {
  slug: string;
  title: string;
  imageSrc: string;
  published: string;
  tags: string[];
  views: number;
};

type TagState = "active" | "disabled" | "neutral";

type SortKey = "date-desc" | "date-asc" | "views-desc" | "views-asc";

/**
 * Removes the leading and trailing white space and line terminator characters from a tag.
 */
function formatTag(tag: string): string {
  return tag.trim();
}

/**
 * Removes the leading and trailing white space and line terminator characters from a list of tags.
 */
function formatTags(tags: string[] | undefined): string[] {
  return tags?.map(formatTag) || [];
}

/**
 * Retrieves a list of unique tags from all blogs.
 */
function getAllTags(): string[] {
  const tags = new Set<string>();

  allBlogs.forEach((blog) => {
    blog.tags?.forEach((tag) => tags.add(formatTag(tag)));
  });

  return Array.from(tags);
}

/**
 * Retrieves a list of formatted blogs with their corresponding views and tags.
 */
async function getAllBlogsWithViews(): Promise<FormattedBlog[]> {
  const blogViews = await getAllBlogViews();
  const blogViewsBySlug = new Map(
    blogViews.map((item) => [item.slug, item.views])
  );

  return allBlogs.map((blog) => {
    const tags = formatTags(blog.tags);
    const views = blogViewsBySlug.get(blog.slug) ?? 0;
    return { ...blog, views, tags };
  });
}

/**
 * Determines if a blog includes all the selected tags.
 */
function blogIncludesAllTags(
  blog: FormattedBlog,
  selectedTags: string[]
): boolean {
  if (selectedTags.length === 0) return true;

  const blogTags = new Set<string>(blog.tags);
  return selectedTags.every((selectedTag) => blogTags.has(selectedTag));
}

/**
 * Determines if there is at least one blog that contains all the selected tags.
 */
function anyBlogExistsWithAllTags(
  blogs: FormattedBlog[],
  selectedTags: string[]
): boolean {
  return blogs.some((blog) => blogIncludesAllTags(blog, selectedTags));
}

/**
 *  Determines the state of a given tag.
 * @param tag The tag for which the state needs to be computed.
 * @param blogs The list of all blogs.
 * @param selectedTags The selected tags.
 * @returns The state of the tag (`active`, `disabled`, `neutral`)
 */
function getTagState(
  tag: string,
  blogs: FormattedBlog[],
  selectedTags: string[]
): TagState {
  // If the tag is already selected, it is active.
  if (selectedTags.includes(tag)) {
    return "active";
  }

  // Check if there is a blog post that would have all the selected tags *in addition* to the new tag.
  // If so, it should be in a neutral state because it can be used to further filter the blogs.
  if (anyBlogExistsWithAllTags(blogs, [...selectedTags, tag])) {
    return "neutral";
  }

  // Otherwise, disable the tag because it would not result in any blogs.
  return "disabled";
}

/**
 * Determines if a blog's title includes a given text (case insensitive).
 */
function blogIncludesText(blog: FormattedBlog, text: string | undefined) {
  if (!text) return true;
  return blog.title.toLowerCase().includes(text.toLowerCase());
}

/**
 * Compares two blogs based on the specified sorting criteria.
 * @param sortBy - The key to determine the sorting order.
 * @param blog1 - The first blog to compare.
 * @param blog2 - The second blog to compare.
 * @returns A negative value if blog1 comes before blog2 in the sorted order,
 *          a positive value if blog1 comes after blog2, or 0 if they are equal.
 */
function compareBlogs(
  sortBy: SortKey | undefined,
  blog1: FormattedBlog,
  blog2: FormattedBlog
): number {
  switch (sortBy) {
    case "date-asc":
      return compareAsc(parseISO(blog1.published), parseISO(blog2.published));
    case "date-desc":
    default:
      return compareDesc(parseISO(blog1.published), parseISO(blog2.published));
    case "views-asc":
      return blog1.views - blog2.views;
    case "views-desc":
      return blog2.views - blog1.views;
  }
}

/**
 * Retrieves a filtered and sorted list of blogs based on the provided criteria.
 * @param search The search query to filter blogs by.
 * @param selectedTags An array of tags to filter blogs by.
 * @param sortBy The key to sort blogs by.
 * @returns A Promise that resolves to an array of formatted blogs.
 */
async function getSortedAndFilteredBlogs(
  search: string | undefined,
  selectedTags: string[],
  sortBy: SortKey | undefined
): Promise<FormattedBlog[]> {
  const blogs = await getAllBlogsWithViews();

  return blogs
    .filter((blog) => blogIncludesText(blog, search))
    .filter((blog) => blogIncludesAllTags(blog, selectedTags))
    .sort((blog1, blog2) => compareBlogs(sortBy, blog1, blog2));
}

export {
  type SortKey,
  type TagState,
  type FormattedBlog,
  getSortedAndFilteredBlogs,
  getAllTags,
  getTagState,
};
