import { Mdx } from "@/components/mdx";
import ViewCounter from "@/components/views";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
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

export type Heading = {
  level: number;
  text: string;
  slug: string;
};

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const blog = findBlogBySlug(params.slug);
  if (!blog) return notFound();

  const headings: Heading[] = blog.headings;

  console.log(headings);
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
      <div className="hidden lg:sticky lg:top-32 lg:flex lg:w-full lg:flex-col lg:items-start lg:gap-1">
        <span>Table of Contents</span>

        {headings.map((item) => {
          const margins: Record<number, string> = {
            1: "ml-0",
            2: "ml-4",
            3: "ml-8",
            4: "ml-12",
            5: "ml-16",
            6: "ml-20",
          };
          return (
            <a
              key={item.slug}
              className={`inline-block cursor-pointer text-light-medium transition duration-100 hover:text-light dark:text-dark-medium dark:hover:text-dark ${
                margins[item.level]
              }`}
              href={`#${item.slug}`}
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
