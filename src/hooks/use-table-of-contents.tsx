import { isInViewport } from "@/lib/html-utils";
import { useState, useCallback, useEffect } from "react";
import { useScroll } from "./use-events";

/**
 * Custom hook that keeps track of the visible heading on a page.
 * Each heading should have a unique slug.
 */
export function useTableOfContents<T extends { slug: string }>(headings: T[]) {
  const [activeSlug, setActiveSlug] = useState("");

  const handleScroll = useCallback(() => {
    const headingElements: HTMLElement[] = headings.map(
      ({ slug }) => document.getElementById(slug) as HTMLElement
    );

    const visibleHeadings = headingElements.filter(
      // Offset of 96px to account for the header
      (el) => el && isInViewport(el, -96)
    );

    if (visibleHeadings.length >= 1) {
      setActiveSlug(visibleHeadings[0].id);
    }
  }, [headings]);

  useEffect(() => {
    // Execute on first render
    handleScroll();
  }, [handleScroll, headings]);

  useScroll(handleScroll);

  return { activeSlug };
}
