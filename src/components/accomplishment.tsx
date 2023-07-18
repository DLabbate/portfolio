import { type Accomplishment } from "@/constants/profile";
import * as motion from "@/components/animations/motion";
import { Calendar, MapPin } from "react-feather";

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
      className="relative flex w-full cursor-pointer flex-col rounded-lg border border-primary-2 bg-primary-1 p-4 md:gap-0 lg:w-[calc(100%/2-1rem/2)]"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-2xl">{title}</span>
      <span className="text-md text-dark-medium">{organization}</span>
      <div className="right-4 top-4 flex gap-1 md:absolute">
        <Calendar strokeWidth={1} className="stroke-[#a5a5a9] md:hidden" />
        <span className="text-dark-medium">{years.join(", ")}</span>
      </div>
      <p className="col-span-2 mt-4 text-sm text-dark-medium ">{description}</p>
    </motion.a>
  );
};

export default Accomplishment;
