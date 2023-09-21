"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Calendar, Eye, Filter, Icon } from "react-feather";

type Filter = {
  text: string;
  icon: Icon;
};

const FILTERS: Filter[] = [
  {
    text: "Date (Newest to Oldest)",
    icon: Calendar,
  },
  {
    text: "Date (Oldest to Newest)",
    icon: Calendar,
  },
  {
    text: "Views (Low to High)",
    icon: Eye,
  },
  {
    text: "Views (High to Low)",
    icon: Eye,
  },
];

const FilterItem = ({
  text,
  icon: Icon,
  className,
}: Filter & { className?: string }) => {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Icon strokeWidth={1} />
      {text}
    </div>
  );
};

const BlogFilter = () => {
  const [selected, setSelected] = useState(FILTERS[0]);
  const [open, setOpen] = useState<boolean>(false);

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
    console.log(open);
  }, [open]);

  return (
    // <div>
    //   <div className="relative z-50 flex w-96 items-center gap-2">
    //     <span className="whitespace-nowrap text-light-medium dark:text-dark-medium">
    //       Sort By
    //     </span>

    //     <div
    //       className={clsx(
    //         "h-auto w-full cursor-pointer rounded-lg border border-primary-200 bg-white p-2 text-light-medium dark:border-primary-800 dark:bg-primary-900 dark:text-dark-medium",
    //         open &&
    //           "ring-2 ring-inset ring-primary-100 dark:ring-primary-800 dark:placeholder:text-dark-medium"
    //       )}
    //       onClick={() => setOpen(!open)}
    //     >
    //       {selected.text}
    //     </div>
    //     {open && (
    //       <div className="absolute top-12 flex w-full flex-col divide-y overflow-hidden rounded-lg border border-primary-200 bg-white text-light-medium dark:divide-primary-800 dark:border-primary-800 dark:bg-primary-900 dark:text-dark-medium">
    //         {FILTERS.map((item) => (
    //           <span
    //             className="inline-block flex-1 cursor-pointer p-2 dark:hover:bg-primary-800 dark:hover:text-dark"
    //             key={item.text}
    //             onClick={() => setSelected(item)}
    //           >
    //             {item.text}
    //           </span>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div>
      <div className="z-40 flex w-96 items-center gap-2 text-light-medium dark:text-dark-medium">
        <span className="whitespace-nowrap text-light-medium dark:text-dark-medium">
          Sort By
        </span>
        <div className="relative z-40 flex-1">
          <div
            className={clsx(
              "flex h-auto w-full cursor-pointer gap-2 rounded-lg border border-primary-200 bg-white p-2 dark:border-primary-800 dark:bg-primary-900",
              open && "ring-2 ring-inset ring-primary-100 dark:ring-primary-800"
            )}
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            <FilterItem text={selected.text} icon={selected.icon} />
          </div>

          <div
            ref={dropdownRef}
            className={clsx(
              "absolute top-12 flex w-full flex-col divide-y overflow-hidden rounded-lg border border-primary-200 bg-white text-light-medium shadow dark:divide-primary-800 dark:border-primary-800 dark:bg-primary-900 dark:text-dark-medium",
              !open && "hidden"
            )}
          >
            {FILTERS.map((item) => {
              return (
                <div
                  className={clsx(
                    "flex-1 cursor-pointer p-2 dark:hover:bg-primary-800 dark:hover:text-dark",
                    selected === item && "bg-primary-800 text-dark"
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
