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

const TableOfContents = ({ headings }: Props) => {
  return (
    <div className="hidden lg:sticky lg:top-32 lg:flex lg:w-full lg:flex-col lg:items-start lg:gap-1">
      <span>Table of Contents</span>
      {headings.map(({ slug, level, text }) => {
        return (
          <a
            key={slug}
            href={`#${slug}`}
            className={`inline-block cursor-pointer text-light-medium transition duration-100 hover:text-light dark:text-dark-medium dark:hover:text-dark ${MARGINS[level]}`}
          >
            {text}
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
