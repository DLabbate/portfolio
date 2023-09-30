import { Mdx } from "@/components/mdx";
import TableOfContents from "@/components/table-of-contents";
import ViewCounter from "@/components/views";
import { getAllBlogViews, getBlogViewsBySlug } from "@/lib/db";
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
  return { title: blog.title, tags: blog.tags };
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog = findBlogBySlug(slug);
  if (!blog) return notFound();

  const views = await getBlogViewsBySlug(slug);

  return (
    <>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-blog-page">
        <h1 className="text-4xl font-bold lg:col-span-full">{blog.title}</h1>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg lg:col-span-full">
          <Image
            priority
            src={blog.imageSrc}
            fill
            alt={blog.title}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <div className="flex flex-col gap-2 self-start">
          <span className="text-light-medium dark:text-dark-medium">
            Published: April 17, 1998
          </span>
          <span className="text-light-medium dark:text-dark-medium">
            Last Edited: April 17, 1998
          </span>
        </div>
        <div className="flex justify-start lg:flex lg:w-full lg:justify-end">
          <ViewCounter slug={slug} views={views?.views ?? 0} trackView={true} />
        </div>
        <Mdx code={blog.body.code} />
        <div className="overflow-clip">
          <TableOfContents headings={blog.headings} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
