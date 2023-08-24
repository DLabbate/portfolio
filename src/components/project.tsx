import * as motion from "@/components/animations/motion";
import Image from "next/image";
import { type Project } from "@/constants/profile";
import { TechnologyBadge } from "./technology-badge";
import Link from "next/link";

const Project = ({
  title,
  description,
  technologies,
  image,
  link,
}: Project) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer rounded-xl border border-primary-2 bg-primary-1 p-3 md:aspect-[0.75] md:w-[calc(100%/2-1rem/2)] xl:w-[calc(100%/3-2*1rem/3)]"
    >
      <Link href={link} className="flex h-full w-full flex-col">
        <div className="w-auto flex-[1] overflow-hidden rounded-2xl bg-primary-2">
          <Image
            src={image}
            alt="project"
            placeholder="blur"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="aspect-square md:aspect-auto"
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-3 text-justify">
            <span className="font-bold">{title} </span>
            <span className="text-sm text-dark-medium">{description}</span>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {technologies.map((technology) => (
              <TechnologyBadge key={technology} type={technology} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
