import { Mdx } from "@/components/mdx";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

const findBlogBySlug = (slug: string) =>
  allBlogs.find((blog) => blog.slug === slug);

export const generateStaticParams = async () =>
  allBlogs.map(({ slug }) => {
    return { slug };
  });

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = findBlogBySlug(params.slug);
  if (!blog) return;
  return { title: blog.title };
};

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const blog = findBlogBySlug(params.slug);
  if (!blog) return notFound();

  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
      </div>
      <Mdx code={blog.body.code} />
    </div>
  );
};

export default BlogPost;
