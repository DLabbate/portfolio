"use client";

import { useSearchParamsActions } from "@/hooks";
import { TagState } from "@/lib/blogs";
import clsx from "clsx";

type Props = {
  label: string;
  state: TagState;
};

const BlogTag = ({ label, state }: Props) => {
  const { appendParam, removeParam } = useSearchParamsActions("tags");

  return (
    <button
      onClick={() => {
        switch (state) {
          case "active":
            removeParam(label);
            break;
          case "neutral":
            appendParam(label);
            break;
          case "disabled":
            break;
        }
      }}
      className={clsx(
        "flex h-10 w-auto items-center rounded-full border border-primary-200 px-3 py-2 text-sm transition duration-200 dark:border-primary-800",
        state === "active" &&
          "cursor-pointer bg-primary-100 text-light dark:bg-primary-800 dark:text-dark",
        state === "disabled" &&
          "cursor-not-allowed border-primary-100 text-light-disabled dark:border-primary-900 dark:text-dark-disabled",
        state === "neutral" &&
          "cursor-pointer bg-white text-light-medium hover:bg-primary-100 hover:text-light dark:bg-primary-900 dark:text-dark-medium dark:hover:bg-primary-800 dark:hover:text-dark"
      )}
    >
      {label}
    </button>
  );
};

export default BlogTag;
