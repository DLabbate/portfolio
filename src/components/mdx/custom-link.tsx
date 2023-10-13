import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

const CustomLink = ({
  href,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const className =
    "font-semibold cursor-pointer text-indigo-500 dark:text-indigo-500";

  if (!href) return null;

  if (href.startsWith("/")) {
    return <Link href={href} className={className} {...rest} />;
  }

  return <a href={href} className={className} {...rest} />;
};

export default CustomLink;
