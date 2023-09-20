"use client";

import { useEffect, useState } from "react";

export type Heading = {
  level: number;
  text: string;
  slug: string;
};

type Props = {
  headings: Heading[];
};

const MARGINS: Record<number, string> = {
  1: "ml-0",
  2: "ml-0",
  3: "ml-4",
  4: "ml-8",
  5: "ml-12",
  6: "ml-16",
};

const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
const isInViewport = (el: HTMLElement, offset = 0): boolean => {
  if (!el) return false;
  const top = el.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
};

// const Heading = ({ slug, text, level }: Heading) => {
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.getElementById(slug);

//       if (element && isElementInViewport(element)) {
//         setActive(true);
//       } else {
//         setActive(false);
//       }
//     };

//     handleScroll();

//     document.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [slug]);

//   return (
//     <a
//       key={slug}
//       href={`#${slug}`}
//       className={`inline-block cursor-pointer transition duration-150 hover:font-semibold hover:text-indigo-500 dark:hover:text-indigo-500 ${
//         MARGINS[level]
//       } ${
//         active
//           ? "font-semibold text-indigo-500 dark:text-indigo-500"
//           : "text-light-medium dark:text-dark-medium"
//       }`}
//     >
//       {text}
//     </a>
//   );
// };

const TableOfContents = ({ headings }: Props) => {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const handleScroll2 = () => {
      const headingElements = headings.map(({ slug }) =>
        document.getElementById(slug)
      );

      const visibleHeadings = headingElements.filter(
        (el) => el && isInViewport(el, -96)
      );

      console.log(visibleHeadings);

      if (visibleHeadings && visibleHeadings.length >= 1) {
        if (visibleHeadings[0]) setActiveSlug(visibleHeadings[0].id);
      }
    };

    handleScroll2();

    document.addEventListener("scroll", handleScroll2);

    return () => {
      document.removeEventListener("scroll", handleScroll2);
    };
  }, [headings]);

  return (
    <div className="hidden lg:sticky lg:top-32 lg:flex lg:w-full lg:flex-col lg:items-start lg:gap-1">
      <span className="text-lg font-bold">Table of Contents</span>
      {headings.map(({ slug, level, text }) => {
        return (
          //   <a
          //     key={slug}
          //     href={`#${slug}`}
          //     className={`inline-block cursor-pointer text-light-medium transition duration-100 hover:text-light dark:text-dark-medium dark:hover:text-dark ${MARGINS[level]}`}
          //   >
          //     {text}
          //   </a>

          // <Heading key={slug} slug={slug} level={level} text={text} />

          <a
            key={slug}
            href={`#${slug}`}
            className={`inline-block cursor-pointer transition duration-150 hover:font-semibold hover:text-indigo-500 dark:hover:text-indigo-500 ${
              MARGINS[level]
            } ${
              activeSlug == slug
                ? "font-semibold text-indigo-500 dark:text-indigo-500"
                : "text-light-medium dark:text-dark-medium"
            }`}
          >
            {text}
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
