import React from "react";
import Image from "next/image";
import { type TimelineEntry } from "@/constants/profile";
import { Label } from "./technology-badge";

/**
 * Formats a date in the format "Month Year", e.g. "May 2021"
 */
const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-CA", {
    month: "long",
    year: "numeric",
  });

const TimelineEntry = ({
  title,
  organization,
  content,
  technologies,
  timeframe,
}: TimelineEntry) => {
  return (
    <div className="grid grid-cols-timeline gap-4 pr-4">
      <div className="col-start-1 col-end-2">
        <a className="h-16 w-16" href={organization.link}>
          <Image
            src={organization.logo}
            alt="organization"
            className="h-16 w-16 cursor-pointer rounded-full object-cover"
          />
        </a>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl">{title}</span>
        <span className="text-xl text-dark-medium">{organization.name}</span>
      </div>
      <div className="relative">
        <div className="block text-dark-medium">
          <time>{formatDate(timeframe.from)}</time>
          <span className="ml-2 mr-2">—</span>
          <time>
            {timeframe.to === "Present" ? "Present" : formatDate(timeframe.to)}
          </time>
        </div>
        <div className="absolute -right-[1.375rem] top-[0.375rem] h-3 w-3 rounded-full bg-primary-2" />
      </div>
      <div className="col-span-2 col-start-2">
        <ul className="ml-4 list-disc">
          {content.map((item) => (
            <li key={item} className="text-dark-medium">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 col-start-2 flex flex-wrap gap-2">
        {technologies.map((item) => (
          <Label key={item} type={item} />
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
    <div className="flex w-3/4 flex-col gap-8 border-r border-primary-2">
      {data.map((item) => (
        <TimelineEntry key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
