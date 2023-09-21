import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

/**
 * Custom hook for interacting with url query params.
 */
export const useSearchParamsActions = (name: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  // Sets the query params on the url
  const setQueryParams = useCallback(
    (params: URLSearchParams) => {
      router.push(pathname + "?" + params.toString());
    },
    [pathname, router]
  );

  // Merges the current searchParams with a provided key/value pair.
  // If undefined, removes the query param.
  const setParam = useCallback(
    (value: string | undefined) => {
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name, value);
      }

      setQueryParams(params);
    },
    [name, params, setQueryParams]
  );

  // Appends a key/value pair to the current searchParams.
  // E.g. tags="TailwindCSS"&tags="Next.js"
  const appendParam = useCallback(
    (value: string) => {
      params.append(name, value);
      setQueryParams(params);
    },
    [name, params, setQueryParams]
  );

  // Removes a specific value from the current searchParams.
  // The other fields will be kept (even for the same key).
  const removeParam = useCallback(
    (value: string) => {
      const values = params.getAll(name);

      // Delete only the specific value
      // E.g. tags="Next.js"&tags="TailwindCSS" should become tags="Next.js" after removing "TailwindCSS"
      params.delete(name);
      values.forEach((item) => {
        if (item !== value) params.append(name, item);
      });

      setQueryParams(params);
    },
    [name, params, setQueryParams]
  );

  return { setParam, appendParam, removeParam };
};
