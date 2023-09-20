import { Mdx } from "@/components/mdx";
import TableOfContents from "@/components/table-of-contents";
import ViewCounter from "@/components/views";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
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
    <div className="flex w-full max-w-5xl flex-col items-start gap-8 lg:grid lg:grid-cols-blog-page">
      <h1 className="col-span-2 text-4xl font-bold">{blog.title}</h1>
      <div className="relative col-span-2 aspect-[3/2] w-full overflow-hidden rounded-lg">
        <Image priority src={blog.imageSrc} fill alt={blog.title} />
      </div>
      <div className="flex flex-col gap-2 self-start">
        <span className="text-light-medium dark:text-dark-medium">
          Published: April 17, 1998
        </span>
        <span className="text-light-medium dark:text-dark-medium">
          Last Edited: April 17, 1998
        </span>
      </div>
      <div className="justify-start lg:flex lg:w-full lg:justify-end">
        <ViewCounter views={1001} />
      </div>
      <Mdx code={blog.body.code} />
      <TableOfContents headings={blog.headings} />
    </div>
  );
};

export default BlogPost;
