import React from "react";
import { type Accomplishment } from "@/constants/profile";
import * as motion from "@/components/animations/motion";

const Accomplishment = ({
  title,
  organization,
  description,
  years,
  link,
}: Accomplishment) => {
  return (
    <motion.a
      href={link}
      className="relative flex w-1/3 min-w-[30rem] max-w-[40rem] cursor-pointer flex-col rounded-lg border border-primary-2 bg-primary-1 p-4"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-2xl">{title}</span>
      <span className="text-md mb-4 text-dark-medium">{organization}</span>
      <span className="text-sm text-dark-medium">{description}</span>
      <span className="absolute right-4 top-4 text-dark-medium">
        {years.join(", ")}
      </span>
    </motion.a>
  );
};

export default Accomplishment;
