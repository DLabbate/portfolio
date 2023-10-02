import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import ViewCounter from "./blog-views";

type Props = {
  slug: string;
  title: string;
  image: string;
  date: Date;
  views: number;
};

const BlogThumbnail = async ({ slug, title, image, date, views }: Props) => {
  return (
    <div className="w-full cursor-pointer rounded-xl p-4 transition duration-200 hover:bg-white hover:shadow hover:ring-1 hover:ring-primary-200 dark:hover:bg-primary-900 dark:hover:ring-1 dark:hover:ring-primary-800 md:w-[calc(100%/2-1rem/2)] xl:w-[calc(100%/3-2*1rem/3)]">
      <Link href={`/blogs/${slug}`} className="block h-full w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt="blog"
              fill
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <span className="whitespace-nowrap text-lg dark:text-dark-medium">
            {format(date, "MMMM d, yyyy")}
          </span>
          <div className="flex h-auto justify-end align-top">
            <ViewCounter views={views} slug={slug} trackView={false} />
          </div>
          <div className="col-span-2 text-3xl">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default BlogThumbnail;
