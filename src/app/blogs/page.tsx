import FilteredBlogs from "@/components/filtered-blogs";
import { allBlogs } from "contentlayer/generated";

const getAllTags = (): string[] => {
  const tags: Set<string> = new Set<string>();

  allBlogs.forEach((blog) => {
    blog.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags);
};
const Blogs = () => {
  const allTags = getAllTags();

  return (
    <div className="bg-primary mt-4 flex w-full flex-1 flex-col items-center justify-start gap-4">
      <FilteredBlogs blogs={allBlogs} allTags={allTags} />
    </div>
  );
};

export default Blogs;
