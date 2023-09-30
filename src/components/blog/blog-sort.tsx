"use client";

import { useKeyDown, useMouseClick } from "@/hooks/use-events";
import { useSearchParamsActions } from "@/hooks/use-search-params-actions";
import { SortKey } from "@/lib/blogs";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Calendar, Eye, Icon } from "react-feather";
import * as motion from "@/components/animations/motion";

type SortInfo = {
  query: SortKey;
  text: string;
  icon: Icon;
};

const SORT_LIST: SortInfo[] = [
  {
    query: "date-desc",
    text: "Date (Newest to Oldest)",
    icon: Calendar,
  },
  {
    query: "date-asc",
    text: "Date (Oldest to Newest)",
    icon: Calendar,
  },
  {
    query: "views-asc",
    text: "Views (Low to High)",
    icon: Eye,
  },
  {
    query: "views-desc",
    text: "Views (High to Low)",
    icon: Eye,
  },
];

const SortItem = ({ text, icon: Icon }: SortInfo) => {
  return (
    <div className="flex select-none items-center gap-2 ">
      <Icon strokeWidth={1} />
      {text}
    </div>
  );
};

const BlogSort = () => {
  const { setParam } = useSearchParamsActions("sortBy");
  const [selected, setSelected] = useState(SORT_LIST[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if a user clicks the Escape button
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  // Close the dropdown if a user clicks outside
  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useMouseClick(handleClickOutside);
  useKeyDown(handleHideDropdown);

  useEffect(() => {
    setParam(selected.query);
  }, [selected, setParam]);

  return (
    <div className="z-40 flex w-80 items-center gap-2 text-light-medium dark:text-dark-medium">
      <span className="whitespace-nowrap">Sort By</span>
      <div className="relative z-40 flex-1">
        <div
          className={clsx(
            "flex h-auto w-full cursor-pointer gap-2 rounded-lg border border-primary-200 bg-white p-2 transition duration-200 dark:border-primary-800 dark:bg-primary-900",
            open && "ring-2 ring-inset ring-primary-100 dark:ring-primary-800"
          )}
          onClick={() => setOpen(!open)}
        >
          <SortItem {...selected} />
        </div>
        <motion.div
          key="blog-sort"
          ref={dropdownRef}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0, y: -10 },
          }}
          animate={open ? "open" : "closed"}
          className={clsx(
            "absolute top-12 flex w-full flex-col divide-y divide-primary-100 overflow-hidden rounded-lg border border-primary-200 bg-white shadow dark:divide-primary-800 dark:border-primary-800 dark:bg-primary-900",
            !open && "invisible"
          )}
        >
          {SORT_LIST.map((item) => {
            return (
              <div
                className={clsx(
                  "flex-1 cursor-pointer p-2 hover:bg-primary-100 hover:text-light dark:hover:bg-primary-800 dark:hover:text-dark",
                  selected === item &&
                    "bg-primary-100 text-light dark:bg-primary-800 dark:text-dark"
                )}
                key={item.text}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
              >
                <SortItem {...item} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSort;
