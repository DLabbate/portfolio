import Image from "next/image";
import { TimeFrame, type TimelineEntry } from "@/constants/profile";
import { TechnologyBadge } from "./technology-badge";
import { Calendar } from "react-feather";
import { format, parseISO } from "date-fns";
import { getFormattedDuration } from "@/lib/dates";

/**
 * Formats a date in the format "Month Year", e.g. "May 2021"
 */
const formatDate = (date: string): string =>
  format(parseISO(date), "MMMM yyyy");

const Timeframe = ({ from, to }: TimeFrame) => {
  return (
    <div className="flex flex-col items-start text-light-medium dark:text-dark-medium md:items-end">
      <div className="">
        <time>{formatDate(from)}</time>
        <span className="ml-2 mr-2">—</span>
        <time>{to === "Present" ? "Present" : formatDate(to)}</time>
      </div>
      <time className="text-sm italic">
        {getFormattedDuration(
          parseISO(from),
          to === "Present" ? new Date() : parseISO(to)
        )}
      </time>
    </div>
  );
};

const TimelineEntry = ({
  title,
  organization,
  content,
  technologies,
  timeframe,
}: TimelineEntry) => {
  return (
    <div className="grid grid-cols-timeline-small gap-4 pr-0 md:grid-cols-timeline md:gap-4 md:pr-4">
      <a className="h-16 w-16" href={organization.link}>
        <Image
          src={organization.logo}
          alt="organization"
          className="h-16 w-16 cursor-pointer rounded-full object-cover"
        />
      </a>
      <div className="flex flex-col">
        <span className="text-2xl">{title}</span>
        <span className="text-xl text-light-medium dark:text-dark-medium">
          {organization.name}
        </span>
      </div>
      <div className="relative col-span-full flex items-center gap-2 md:col-span-1 md:items-start">
        <Calendar
          strokeWidth={1}
          className="h-auto stroke-light-medium dark:stroke-dark-medium md:hidden"
        />
        <Timeframe from={timeframe.from} to={timeframe.to} />
        <div className="-right-[1.375rem] top-[0.375rem] hidden h-3 w-3 rounded-full bg-primary-200 dark:bg-primary-800 md:absolute md:block" />
      </div>
      <div className="col-span-full md:col-span-2 md:col-start-2">
        <ul className="ml-4 list-disc">
          {content.map((item) => (
            <li key={item} className="text-light-medium dark:text-dark-medium">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-full flex flex-wrap gap-2 md:col-span-2 md:col-start-2">
        {technologies.map((item) => (
          <TechnologyBadge key={item} type={item} />
        ))}
      </div>
    </div>
  );
};

type TimelineProps = {
  data: ReadonlyArray<TimelineEntry>;
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="flex flex-col gap-8 md:border-r md:border-primary-200 md:dark:border-primary-800">
      {data.map((item) => (
        <TimelineEntry key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
