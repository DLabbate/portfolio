"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUpCircle, Icon } from "react-feather";

type AdditionalLinkProps = {
  href: string;
  text: string;
  icon: Icon;
};

const AdditionalLink = ({ href, text, icon: Icon }: AdditionalLinkProps) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 text-light-medium hover:text-light dark:text-dark-medium dark:hover:text-dark"
    >
      {text}
      <Icon
        className="stroke-light-medium group-hover:stroke-light dark:stroke-dark-medium dark:group-hover:stroke-dark"
        size={16}
      />
    </a>
  );
};

export type Heading = {
  level: number;
  text: string;
  slug: string;
};

type Props = {
  headings: Heading[];
};

// Different levels of indentation depending on the heading (e.g. h1 vs. h2 vs. h3)
const MARGINS: Record<number, string> = {
  1: "ml-0",
  2: "ml-0",
  3: "ml-4",
  4: "ml-8",
  5: "ml-12",
  6: "ml-16",
};

// https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
const isInViewport = (el: HTMLElement, offset = 0): boolean => {
  if (!el) return false;
  const top = el.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
};

const TableOfContents = ({ headings }: Props) => {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const handleScroll = () => {
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
    };

    // Execute on first render
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <div className="hidden lg:sticky lg:top-32 lg:flex lg:w-full lg:flex-col lg:items-start lg:gap-1">
      <span className="text-lg font-bold">Table of Contents</span>
      {headings.map(({ slug, level, text }) => {
        return (
          <a
            key={slug}
            href={`#${slug}`}
            className={clsx(
              "inline-block cursor-pointer hover:font-semibold hover:text-indigo-500 dark:hover:text-indigo-500",
              MARGINS[level],
              activeSlug === slug
                ? "font-semibold text-indigo-500 dark:text-indigo-500"
                : "text-light-medium dark:text-dark-medium"
            )}
          >
            {text}
          </a>
        );
      })}
      <hr className="mb-4 mt-4 w-full border-primary-200 dark:border-primary-800" />
      <AdditionalLink
        href="https://github.com/DLabbate/portfolio/tree/master/content"
        text="Edit on GitHub"
        icon={ArrowUpRight}
      />
      <AdditionalLink
        href={`#${headings[0].slug}`}
        text="Scroll to top"
        icon={ArrowUpCircle}
      />
    </div>
  );
};

export default TableOfContents;
