"use client";

import { useSearchParamsActions } from "@/hooks/use-query-params";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Calendar, Eye, Filter, Icon } from "react-feather";

type Filter = {
  query: string;
  text: string;
  icon: Icon;
};

const FILTERS: Filter[] = [
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

const FilterItem = ({ text, icon: Icon }: Filter) => {
  return (
    <div className="flex items-center gap-2">
      <Icon strokeWidth={1} />
      {text}
    </div>
  );
};

const BlogFilter = () => {
  const [selected, setSelected] = useState(FILTERS[0]);
  const [open, setOpen] = useState<boolean>(false);

  const { setParam } = useSearchParamsActions("sortBy");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown);
      document.removeEventListener("click", handleClickOutside);
    };
  });

  useEffect(() => {
    setParam(selected.query);
  }, [selected, setParam]);

  return (
    <div>
      <div className="z-40 flex w-96 items-center gap-2 text-light-medium dark:text-dark-medium">
        <span className="whitespace-nowrap">Sort By</span>
        <div className="relative z-40 flex-1">
          <div
            className={clsx(
              "flex h-auto w-full cursor-pointer gap-2 rounded-lg border border-primary-200 bg-white p-2 dark:border-primary-800 dark:bg-primary-900",
              open && "ring-2 ring-inset ring-primary-100 dark:ring-primary-800"
            )}
            onClick={() => setOpen(!open)}
          >
            <FilterItem {...selected} />
          </div>
          <div
            ref={dropdownRef}
            className={clsx(
              "absolute top-12 flex w-full flex-col divide-y divide-primary-100 overflow-hidden rounded-lg border border-primary-200 bg-white shadow dark:divide-primary-800 dark:border-primary-800 dark:bg-primary-900",
              !open && "hidden"
            )}
          >
            {FILTERS.map((item) => {
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
                  <FilterItem {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
