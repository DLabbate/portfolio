import { Blog, allBlogs } from "contentlayer/generated";
import { parseISO } from "date-fns";
import BlogSearch from "@/components/blog-search";
import BlogTag, { TagState } from "@/components/blog-tag";
import BlogPost from "@/components/blog";

/**
 * Removes the leading and trailing white space and line terminator characters from a tag.
 */
const formatTag = (tag: string): string => tag.trim();

/**
 * Removes the leading and trailing white space and line terminator characters from a list of tags.
 */
const formatTags = (tags: string[] | undefined): string[] => {
  return tags?.map(formatTag) || [];
};

/**
 * List of blogs, with tags formatted (no trailing whitespace or line terminator characters).
 */
const ALL_BLOGS = allBlogs.map((blog) => {
  return { ...blog, tags: formatTags(blog.tags) };
});

/**
 * Retrieves a list (with no duplicates) of all the tags found from all the blog posts.
 */
const getAllTags = (): string[] => {
  const tags = new Set<string>();

  ALL_BLOGS.forEach((blog) => {
    blog.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags);
};

/**
 * List (with no duplicates) of all the tags found from all the blog posts.
 */
const ALL_TAGS = getAllTags();

/**
 * Formats tags as an array of strings.
 */
const getTagsFromSearchParams = (searchParams: SearchParams): string[] => {
  const tags = searchParams.tags;

  if (typeof tags === "string") {
    return [tags];
  }

  if (Array.isArray(tags)) {
    return tags;
  }

  return [];
};

/**
 * Determines if there is at least one blog that contains all the selected tags.
 */
const anyBlogExistsWithAllTags = (selectedTags: string[]): boolean => {
  return ALL_BLOGS.some((blog) => blogIncludesAllTags(blog, selectedTags));
};

/**
 * Determines the state of a given tag.
 */
const getTagState = (selectedTags: string[], tag: string): TagState => {
  // If the tag is already selected, it is active.
  if (selectedTags.includes(tag)) {
    return "active";
  }

  // Check if there is a blog post that would have all the selected tags *in addition* to the new tag.
  // If so, it should be in a neutral state because it can be used to further filter the blogs.
  if (anyBlogExistsWithAllTags([...selectedTags, tag])) {
    return "neutral";
  }

  // Otherwise, disable the tag because it would not result in any blogs.
  return "disabled";
};

/**
 * Determines if a blog's title includes a given text (case insensitive).
 */
const blogIncludesText = (blog: Blog, text: string | undefined): boolean => {
  if (!text) return true;
  return blog.title.toLowerCase().includes(text.toLowerCase());
};

/**
 * Determines if a blog includes all the selected tags.
 */
const blogIncludesAllTags = (blog: Blog, selectedTags: string[]): boolean => {
  if (selectedTags.length === 0) return true;
  return selectedTags.every((tag) => blog.tags?.includes(tag));
};

type SearchParams = {
  tags: string | string[] | undefined;
  search: string | undefined;
};

type Params = { searchParams: SearchParams };

const Blogs = ({ searchParams }: Params) => {
  const searchInput = searchParams.search;
  const selectedTags = getTagsFromSearchParams(searchParams);

  return (
    <div className="bg-primary mt-4 flex w-full flex-1 flex-col items-center justify-start gap-4">
      <BlogSearch />
      <div className="flex w-full flex-wrap items-center justify-start gap-2">
        <span className="text-light-medium dark:text-dark-medium">
          Filter by tag:
        </span>
        {ALL_TAGS.map((tag) => {
          return (
            <BlogTag
              key={tag}
              label={tag}
              state={getTagState(selectedTags, tag)}
            />
          );
        })}
      </div>
      <div className="mt-4 flex w-full flex-wrap items-stretch justify-center gap-4">
        {ALL_BLOGS.filter((blog) => blogIncludesText(blog, searchInput))
          .filter((blog) => blogIncludesAllTags(blog, selectedTags))
          .map(({ slug, title, imageSrc, date }) => (
            <BlogPost
              key={slug}
              slug={slug}
              title={title}
              image={imageSrc}
              date={parseISO(date)}
              views={1245252}
            />
          ))}
      </div>
    </div>
  );
};

export default Blogs;
