"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "react-feather";
import Link from "next/link";
import * as motion from "@/components/animations/motion";
import { NAME } from "@/constants/profile";
import { AnimatePresence } from "framer-motion";
import ThemeSelector from "../theme/theme-selector";

type Page = {
  title: string;
  href: string;
  exact: boolean;
};

const LINKS: ReadonlyArray<Page> = [
  { title: "Home", href: "/", exact: true },
  { title: "Portfolio", href: "/portfolio", exact: false },
  { title: "Blogs", href: "/blogs", exact: false },
];

type Props = Page & {
  onClick?: () => void;
};

const HeaderLink = ({ title, href, exact, onClick }: Props) => {
  const pathname = usePathname();
  const active: boolean = exact ? pathname === href : pathname.startsWith(href);
  return (
    <motion.div
      whileHover="hover"
      animate={active ? "active" : "inactive"}
      className="relative flex w-full cursor-pointer items-center justify-center border-y border-primary-800 text-xl lg:block lg:w-auto lg:border-0"
    >
      <Link
        className="flex h-full w-full items-center justify-center p-8 lg:h-auto lg:w-auto lg:p-0"
        href={href}
        onClick={onClick ? onClick : () => {}}
      >
        {title}
      </Link>
      <div className="hidden w-full lg:block">
        <motion.div
          data-test={`header-link-underline-${title.toLowerCase()}`}
          className="absolute h-1 bg-primary-900 dark:bg-white"
          variants={{
            hover: { width: "100%" },
            active: { width: "100%" },
            inactive: { width: 0 },
          }}
        />
      </div>
    </motion.div>
  );
};

const SmallHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const iconProps = {
    strokeWidth: 1,
    size: 30,
    className: "stroke-light dark:stroke-dark",
  } as const;

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = menuOpen ? "hidden" : "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <div
        className="flex h-24 w-full items-start justify-center p-8 backdrop-blur-md lg:hidden"
        data-test="small-header"
      >
        <span className="flex-1 whitespace-nowrap font-mono text-2xl">
          {NAME}
        </span>
        <div className="flex flex-1 justify-end gap-4">
          <ThemeSelector />
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X {...iconProps} data-test="x-icon" />
            ) : (
              <Menu {...iconProps} data-test="menu-icon" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-24 h-[calc(100vh-6rem)] w-full bg-primary-50/75 backdrop-blur-md dark:bg-primary-950/75"
            key="expandable-menu"
            data-test="expandable-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center justify-center border-y border-primary-800">
              {LINKS.map((link) => (
                <HeaderLink key={link.title} {...link} onClick={toggleMenu} />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LargeHeader = () => {
  return (
    <div
      className="hidden h-auto w-full items-center justify-center p-8 backdrop-blur-md lg:flex"
      data-test="large-header"
    >
      <span className="flex-1 whitespace-nowrap font-mono text-2xl">
        {NAME}
      </span>
      <div className="top-24 w-full flex-1 opacity-100">
        <nav className="flex items-center justify-center gap-16 border-primary-800">
          {LINKS.map((link) => (
            <HeaderLink key={link.title} {...link} />
          ))}
        </nav>
      </div>
      <div className="flex flex-1 justify-end">
        <ThemeSelector />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-primary-50/75 dark:bg-primary-950/75">
      <SmallHeader />
      <LargeHeader />
    </header>
  );
};

export default Header;
