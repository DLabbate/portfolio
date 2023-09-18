import { Mdx } from "@/components/mdx";
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
    <div className="w-full max-w-5xl items-center gap-8">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      {/* <Image
        priority
        src={blog.imageSrc}
        width={800}
        height={400}
        className="rounded-lg"
        alt={blog.title}
      /> */}

      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
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
      <Mdx code={blog.body.code} />
    </div>
  );
};

export default BlogPost;
