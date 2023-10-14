import { type Accomplishment as AccomplishmentInfo } from "@/constants/profile";
import { Calendar } from "react-feather";

const Accomplishment = ({
  title,
  organization,
  description,
  years,
  link,
}: AccomplishmentInfo) => {
  return (
    <a
      href={link}
      className="relative flex w-full cursor-pointer flex-col rounded-lg border border-primary-200 bg-white p-4 shadow transition duration-150 ease-in-out hover:scale-105 dark:border-primary-800 dark:bg-primary-900 md:gap-0 lg:w-[calc(100%/2-1rem/2)]"
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
    </a>
  );
};

export default Accomplishment;
