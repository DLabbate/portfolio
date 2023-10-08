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
import * as motion from "@/components/animations/motion";

const VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

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
  const sortBy = searchParams.sortBy as SortKey;
  const selectedTags = getTagsFromSearchParams(searchParams);

  const allTags = getAllTags();
  const blogs = await getSortedAndFilteredBlogs(
    searchInput,
    selectedTags,
    sortBy
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.125 }}
      className="bg-primary mt-4 flex w-full flex-col gap-4 md:grid md:grid-cols-blogs-page"
    >
      <motion.div variants={VARIANTS}>
        <BlogSearch />
      </motion.div>
      <motion.div variants={VARIANTS}>
        <BlogSort />
      </motion.div>
      <motion.div
        variants={VARIANTS}
        className="col-span-full flex w-full flex-wrap items-center justify-start gap-2"
      >
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
      </motion.div>
      <motion.div
        variants={VARIANTS}
        className="col-span-2 mt-4 flex w-full flex-wrap items-stretch justify-center gap-4"
      >
        {blogs.map(({ slug, title, imageSrc, published, views }) => {
          return (
            <BlogThumbnail
              key={slug}
              slug={slug}
              title={title}
              image={imageSrc}
              date={parseISO(published)}
              views={views}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Blogs;
