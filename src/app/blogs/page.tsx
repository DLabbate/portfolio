import Blog from "@/components/blog";
import Section from "@/components/layout/section";
import spacestagram from "public/test.jpg";
import test2 from "public/test3.jpg";

const Blogs = () => {
  return (
    <div className="bg-primary mt-4 flex flex-1 flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap items-stretch justify-center gap-4">
        <Blog
          title={"Optimistic Concurrency Control in Databases"}
          image={spacestagram}
          link={"blah"}
        />
        <Blog
          title={"Optimistic Concurrency Control"}
          image={test2}
          link={"blah"}
        />
        <Blog
          title={"Optimistic Concurrency Control"}
          image={test2}
          link={"blah"}
        />
      </div>
    </div>
  );
};

export default Blogs;
