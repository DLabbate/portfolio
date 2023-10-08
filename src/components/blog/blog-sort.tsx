"use client";

import { useSearchParamsActions, useDropdown } from "@/hooks";
import { SortKey } from "@/lib/blogs";
import clsx from "clsx";
import { Calendar, Eye, Icon } from "react-feather";
import * as motion from "@/components/animations/motion";

type SortInfo = {
  sortKey: SortKey;
  text: string;
  icon: Icon;
};

const SORT_LIST: SortInfo[] = [
  {
    sortKey: "date-desc",
    text: "Date (Newest to Oldest)",
    icon: Calendar,
  },
  {
    sortKey: "date-asc",
    text: "Date (Oldest to Newest)",
    icon: Calendar,
  },
  {
    sortKey: "views-asc",
    text: "Views (Low to High)",
    icon: Eye,
  },
  {
    sortKey: "views-desc",
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
  const { open, selected, toggleOpen, dropdownRef, selectItem } =
    useDropdown(SORT_LIST);

  return (
    <div className="z-40 flex w-80 items-center gap-2 text-light-medium dark:text-dark-medium">
      <span className="whitespace-nowrap">Sort By</span>
      <div className="relative z-40 flex-1">
        <div
          ref={dropdownRef}
          data-test="blog-sortby"
          className={clsx(
            "flex h-auto w-full cursor-pointer gap-2 rounded-lg border border-primary-200 bg-white p-2 transition duration-200 dark:border-primary-800 dark:bg-primary-900",
            open && "ring-2 ring-inset ring-primary-100 dark:ring-primary-800"
          )}
          onClick={toggleOpen}
        >
          <SortItem {...selected} />
        </div>
        <motion.div
          key="blog-sort"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0, y: -10 },
          }}
          animate={open ? "open" : "closed"}
          className={clsx(
            "absolute top-12 flex w-full flex-col divide-y divide-primary-100 overflow-hidden rounded-lg border border-primary-200 bg-white shadow dark:divide-primary-800 dark:border-primary-800 dark:bg-primary-900",
            !open && "hidden"
          )}
        >
          {SORT_LIST.map((item) => {
            return (
              <div
                key={item.text}
                className={clsx(
                  "flex-1 cursor-pointer p-2 hover:bg-primary-100 hover:text-light dark:hover:bg-primary-800 dark:hover:text-dark",
                  selected === item &&
                    "bg-primary-100 text-light dark:bg-primary-800 dark:text-dark"
                )}
                onClick={() => {
                  selectItem(item);
                  setParam(item.sortKey);
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
