import * as motion from "@/components/animations/motion";
import React from "react";
import Image from "next/image";
import { type Project } from "@/constants/profile";
import { Label } from "./technology-badge";

const Project = ({
  title,
  description,
  technologies,
  image,
  link,
}: Project) => {
  return (
    <motion.a
      href={link}
      className="flex aspect-[0.75] w-1/3 min-w-[24rem] max-w-[28rem] cursor-pointer flex-col rounded-xl border border-primary-2 bg-primary-1 p-3"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-auto flex-[1] overflow-hidden rounded-2xl bg-primary-2">
        <Image
          src={image}
          alt="project"
          placeholder="blur"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col">
        <div className="mt-3 text-justify">
          <span className="font-bold">{title} </span>
          <span className="text-sm text-dark-medium">{description}</span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {technologies.map((technology) => (
            <Label key={technology} type={technology} />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default Project;
