import { Mdx } from "@/components/mdx";
import { BlogViews, TableOfContents } from "@/components/blog";
import { getBlogViewsBySlug } from "@/lib/db";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";

const formatDate = (date: string) => format(parseISO(date), "MMMM do, yyyy");

const findBlogBySlug = (slug: string) =>
  allBlogs.find((blog) => blog.slug === slug);

export const generateStaticParams = async () =>
  allBlogs.map(({ slug }) => {
    return { slug };
  });

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = findBlogBySlug(params.slug);
  if (!blog) return;

  const {
    title,
    description,
    tags: keywords,
    published: publishedTime,
    imageSrc,
  } = blog;

  return {
    title,
    keywords,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://domeniclabbate.com/blogs/${params.slug}`,
      images: [
        {
          url: imageSrc,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export const revalidate = 0;

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog = findBlogBySlug(slug);
  if (!blog) return notFound();

  const { title, imageSrc, lastEdited, published } = blog;

  const views = await getBlogViewsBySlug(slug);

  return (
    <div className="grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-blog-page">
      <h1 className="flex items-center justify-center text-4xl font-bold lg:col-span-full">
        {title}
      </h1>
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg lg:col-span-full">
        <Image
          priority
          src={imageSrc}
          fill
          alt={title}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 self-start">
        <span className="text-light-medium dark:text-dark-medium">
          Published: {formatDate(published)}
        </span>
        <span className="text-light-medium dark:text-dark-medium">
          Last Edited: {formatDate(lastEdited)}
        </span>
      </div>
      <div className="flex justify-start lg:flex lg:w-full lg:justify-end">
        <BlogViews slug={slug} views={views} trackView={true} />
      </div>
      <Mdx code={blog.body.code} />
      <div className="overflow-clip">
        <TableOfContents slug={slug} headings={blog.headings} />
      </div>
    </div>
  );
};

export default BlogPost;
