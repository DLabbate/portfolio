"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export type TagState = "active" | "disabled" | "neutral";

type Props = {
  label: string;
  active?: boolean;
  state: TagState;
};

const VARIANTS: Record<TagState, string> = {
  active:
    "cursor-pointer bg-primary-100 dark:bg-primary-800 text-light dark:text-dark",
  disabled:
    "cursor-not-allowed text-light-disabled dark:text-dark-disabled border-primary-100 dark:border-primary-400 dark:border-primary-900",
  neutral:
    "cursor-pointer bg-white bg-primary-900 text-light-medium dark:text-dark-medium bg-white hover:bg-primary-100 dark:hover:bg-primary-800 dark:bg-primary-900",
};

const BlogTag = ({ label, state }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      const before = params.getAll(name);
      if (before.includes(value)) {
        // Delete only the specific value
        // E.g. tags="Next.js"&tags="TailwindCSS" should become tags="Next.js" after removing "TailwindCSS"
        params.delete(name);
        before.forEach((item) => {
          if (item !== value) params.append(name, item);
        });
      } else {
        params.append(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <button
      onClick={
        state === "disabled"
          ? () => {}
          : () => {
              router.push(pathname + "?" + createQueryString("tags", label));
            }
      }
      className={`flex h-10 w-auto items-center rounded-full border border-primary-200 px-3 py-2 text-sm transition dark:border-primary-800 ${VARIANTS[state]}`}
    >
      {label}
    </button>
  );
};

export default BlogTag;
