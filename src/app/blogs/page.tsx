import { Blog, allBlogs } from "contentlayer/generated";
import { parseISO } from "date-fns";
import BlogSearch from "@/components/forms/blog-search";
import BlogTag, { TagState } from "@/components/forms/blog-tag";
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
 * Retrieves a list (with no duplicates) of all the tags found from all the blog posts.
 */
const getAllTags = (): string[] => {
  const tags = new Set<string>();

  ALL_BLOGS.forEach((blog) => {
    blog.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags);
};

const ALL_BLOGS = allBlogs.map((blog) => {
  return { ...blog, tags: formatTags(blog.tags) };
});

const ALL_TAGS = getAllTags().map((tag) => formatTag(tag));

/**
 * Formats tags as an array of strings.
 */
const getTagsFromSearchParams = (searchParams: SearchParams): string[] => {
  const tags = searchParams.tags;

  if (typeof tags === "string") {
    return [formatTag(tags)];
  }

  if (Array.isArray(tags)) {
    return formatTags(tags);
  }

  return [];
};

/**
 * Determines if there is at least one blog that contains all the selected tags.
 */
const blogExistsWithTags = (selectedTags: Set<string>): boolean => {
  const selectedTagsList = Array.from(selectedTags);
  console.log("selectedTagsList", selectedTagsList);

  return ALL_BLOGS.some((blog) => {
    const blogTags = new Set(blog.tags);
    console.log("blogTags", blogTags);
    return selectedTagsList.every((tag) => blogTags.has(tag));
  });
};

const blogHasAllTags = (blog: Blog, selectedTags: Set<string>): boolean => {
  const blogTags = new Set(blog.tags);
  return Array.from(selectedTags).every((tag) => blogTags.has(tag));
};

/**
 * Determines the state of a given tag.
 */
const getFilterState = (selectedTags: Set<string>, tag: string): TagState => {
  // If the tag is already selected, it is "active"
  if (selectedTags.has(tag)) {
    return "active";
  }

  // Check if there is a blog post that would have all the selected tags *in addition* to the new tag
  const newSet = new Set(selectedTags);
  newSet.add(tag);

  if (blogExistsWithTags(newSet)) {
    return "neutral";
  }

  return "disabled";
};

type SearchParams = {
  tags: string | string[] | undefined;
  search: string | undefined;
};

type Params = {
  params: { slug: string };
  searchParams: SearchParams;
};

const Blogs = ({ params, searchParams }: Params) => {
  const searchInput = searchParams.search;
  const selectedTags = new Set<string>(getTagsFromSearchParams(searchParams));

  // console.log("tags", tags, typeof searchParams.tags);
  // console.log("searchParams.tags", searchParams.tags, typeof searchParams.tags);
  // console.log("selectedTags", selectedTags);
  return (
    <div className="bg-primary mt-4 flex w-full flex-1 flex-col items-center justify-start gap-4">
      <div>{searchParams.search}</div>
      <div>{searchParams.tags}</div>
      <div>{selectedTags}</div>
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
              state={getFilterState(selectedTags, tag)}
            />
          );
        })}
      </div>
      <div className="mt-4 flex w-full flex-wrap items-stretch justify-center gap-4">
        {ALL_BLOGS.filter(({ title }) => {
          if (!searchInput) return true;
          return title.toLowerCase().includes(searchInput.toLowerCase());
        })
          .filter(({ tags }) => {
            if (selectedTags.size !== 0) {
              return Array.from(selectedTags).every((tag) =>
                tags?.includes(tag)
              );
            }
            return true;

            // if (selectedTags.length !== 0) {
            //   // TODO : optimize?
            //   return selectedTags.every((tag) => tags?.includes(tag));
            // }
          })
          .map(({ slug, title, imageSrc, date, tags }) => (
            <>
              <BlogPost
                key={slug}
                slug={slug}
                title={title}
                image={imageSrc}
                date={parseISO(date)}
                views={1245252}
              />
              <div>
                {tags?.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
