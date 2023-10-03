import { HTMLAttributes } from "react";

const InlineCode = ({ children }: HTMLAttributes<HTMLElement>): JSX.Element => {
  return (
    <span className="whitespace-nowrap rounded-lg border border-primary-200 bg-white px-1 font-mono text-light dark:border-primary-700 dark:bg-primary-800 dark:text-dark">
      {children}
    </span>
  );
};

export default InlineCode;
