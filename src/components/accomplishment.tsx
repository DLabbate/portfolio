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
      className="relative flex w-full cursor-pointer flex-col rounded-lg border border-primary-200 bg-white p-4 shadow dark:border-primary-800 dark:bg-primary-900 md:gap-0 lg:w-[calc(100%/2-1rem/2)]"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-2xl">{title}</span>
      <span className="text-md text-light-medium dark:text-dark-medium">
        {organization}
      </span>
      <div className="right-4 top-4 flex gap-1 md:absolute">
        <Calendar
          strokeWidth={1}
          className="stroke-light-medium dark:stroke-dark-medium md:hidden"
        />
        <span className="text-light-medium dark:text-dark-medium">
          {years.join(", ")}
        </span>
      </div>
      <p className="col-span-2 mt-4 text-sm text-light-medium dark:text-dark-medium">
        {description}
      </p>
    </motion.a>
  );
};

export default Accomplishment;
