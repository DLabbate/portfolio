import { parseISO } from "date-fns";
import {
  SortKey,
  getAllTags,
  getSortedAndFilteredBlogs,
  getTagState,
} from "@/lib/blogs";
import {
  BlogSearch,
  BlogSort,
  BlogTag,
  BlogThumbnail,
} from "@/components/blog";

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

type SearchParams = {
  tags: string | string[] | undefined;
  search: string | undefined;
  sortBy: string | undefined;
};

type Params = { searchParams: SearchParams };

const Blogs = async ({ searchParams }: Params) => {
  const searchInput = searchParams.search;
  const selectedTags = getTagsFromSearchParams(searchParams);
  const sortBy = searchParams.sortBy as SortKey;

  const allTags = getAllTags();
  const blogs = await getSortedAndFilteredBlogs(
    searchInput,
    selectedTags,
    sortBy
  );

  return (
    <div className="bg-primary mt-4 flex w-full flex-col gap-4 md:grid md:grid-cols-blogs-page">
      <BlogSearch />
      <BlogSort />
      <div className="col-span-full flex w-full flex-wrap items-center justify-start gap-2">
        <span className="text-light-medium dark:text-dark-medium">
          Filter By Tag
        </span>
        {allTags.map((tag) => {
          return (
            <BlogTag
              key={tag}
              label={tag}
              state={getTagState(blogs, selectedTags, tag)}
            />
          );
        })}
      </div>
      <div className="col-span-2 mt-4 flex w-full flex-wrap items-stretch justify-center gap-4">
        {blogs.map(({ slug, title, imageSrc, date, views }) => (
          <BlogThumbnail
            key={slug}
            slug={slug}
            title={title}
            image={imageSrc}
            date={parseISO(date)}
            views={views}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
