"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import { Search } from "react-feather";

const BlogSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="relative w-full rounded-lg border border-primary-200 dark:border-primary-800">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search
          strokeWidth={1}
          size={24}
          className="stroke-light-medium dark:stroke-dark-medium"
        />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(event) => {
          router.push(
            pathname + "?" + createQueryString("search", event.target.value)
          );
        }}
        placeholder="Search..."
        className="block w-full rounded-lg border-0 bg-white py-2 pl-14 ring-inset placeholder:text-light-medium focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-primary-100 dark:bg-primary-900 dark:placeholder:text-dark-medium dark:focus:ring-primary-800"
      />
    </div>
  );
};

export default BlogSearch;
