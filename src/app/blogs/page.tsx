import Blog from "@/components/blog";
import Filter from "@/components/forms/filter";
import Input from "@/components/forms/input";
import { allBlogs } from "contentlayer/generated";
import { parseISO } from "date-fns";

const Blogs = () => {
  return (
    <div className="bg-primary mt-4 flex flex-1 flex-col items-center justify-start gap-4">
      <Input placeholder="Search..." />
      <div className="flex w-full items-center justify-start gap-2">
        <span className="text-light-medium dark:text-dark-medium">
          Filter by tag:{" "}
        </span>
        <Filter label="Next.js" />
      </div>
      <div className="mt-4 flex flex-wrap items-stretch justify-center gap-4">
        {allBlogs.map(({ slug, title, imageSrc, date }) => {
          console.log(imageSrc);
          return (
            <Blog
              key={slug}
              slug={slug}
              title={title}
              image={imageSrc}
              date={parseISO(date)}
              views={1245252}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
