import * as motion from "@/components/animations/motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Blog = {
  title: string;
  image: StaticImageData;
  link: string;
};

// const Blog = ({ title, image, link }: Blog) => {
//   return (
//     <motion.div className="cursor-pointer rounded-xl p-4 transition duration-200 hover:bg-white hover:shadow hover:ring-1 hover:ring-primary-200 dark:hover:bg-primary-900 dark:hover:ring-1 dark:hover:ring-primary-800 md:w-[calc(100%/2-1rem/2)] xl:w-[calc(100%/3-2*1rem/3)]">
//       <Link href={link} className="flex h-full w-full flex-col gap-4">
//         <div className="aspect-square w-full overflow-hidden rounded-3xl">
//           <Image
//             src={image}
//             alt="project"
//             placeholder="blur"
//             style={{ height: "100%", width: "100%", objectFit: "cover" }}
//             sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//           />
//         </div>
//         <span className="text-lg dark:text-dark-medium">April 17, 1998</span>
//         <div className="text-3xl">{title}</div>
//       </Link>
//     </motion.div>
//   );
// };

const Blog = ({ title, image, link }: Blog) => {
  return (
    <motion.div className="cursor-pointer rounded-xl p-4 transition duration-200 hover:bg-white hover:shadow hover:ring-1 hover:ring-primary-200 dark:hover:bg-primary-900 dark:hover:ring-1 dark:hover:ring-primary-800 md:w-[calc(100%/2-1rem/2)] xl:w-[calc(100%/3-2*1rem/3)]">
      <Link href={link} className="h-full w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt="project"
              placeholder="blur"
              // style={{ height: "100%", width: "100%", objectFit: "cover" }}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <span className="text-lg dark:text-dark-medium">April 17, 1998</span>
          <div className="flex h-auto justify-end align-top text-sm">
            <div className="w-auto whitespace-nowrap rounded-sm bg-primary-200 p-1 font-mono dark:bg-primary-800">
              14,356 Views
            </div>
          </div>
          <div className="col-span-2 text-3xl">{title}</div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Blog;
