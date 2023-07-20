"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Moon, X } from "react-feather";
import Link from "next/link";
import * as motion from "@/components/animations/motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Page = {
  title: string;
  href: string;
};

const LINKS: ReadonlyArray<Page> = [
  { title: "Home", href: "/" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blogs", href: "/blogs" },
];

type Props = {
  title: string;
  href: string;
  onClick?: () => void;
};

const HeaderLink = ({ title, href, onClick }: Props) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");
  const pathname = usePathname();
  const active: boolean = pathname === href;
  return (
    <motion.div
      whileHover="hover"
      animate={active ? "active" : "inactive"}
      className="relative flex w-full cursor-pointer items-center justify-center border-y border-primary-2 p-8 text-xl lg:block lg:w-auto lg:border-0 lg:p-0 "
    >
      <div
        className="w-full lg:h-auto lg:w-auto"
        onClick={isSmallDevice && onClick ? onClick : () => {}}
      >
        <Link
          className="flex h-full w-full items-center justify-center"
          href={href}
        >
          {title}
        </Link>
      </div>
      {!isSmallDevice && (
        <motion.div
          className="absolute h-1 bg-neutral-50"
          variants={{
            hover: { width: "100%" },
            active: { width: "100%" },
            inactive: { width: 0 },
          }}
        />
      )}
    </motion.div>
  );
};

const SmallHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 z-50 flex h-screen w-full flex-col lg:hidden">
      <div className="flex w-full items-start justify-center bg-primary/75 p-8 backdrop-blur-md">
        <span className="flex-1 whitespace-nowrap font-mono text-2xl">
          Domenic Labbate
        </span>
        <div className="flex flex-1 justify-end gap-4">
          <button>
            <Moon strokeWidth={1} size={30} />
          </button>
          <button onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <X strokeWidth={1} size={30} />
            ) : (
              <Menu strokeWidth={1} size={30} />
            )}
          </button>
        </div>
      </div>
      <motion.div
        className="top-24 w-full flex-1 bg-primary/75 backdrop-blur-md"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
      >
        <nav className="flex flex-col items-center justify-center border-y border-primary-2">
          {LINKS.map((link) => (
            <HeaderLink key={link.title} {...link} onClick={toggleMenu} />
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

const LargeHeader = () => {
  return (
    <header className="fixed top-0 z-50 hidden h-auto w-full items-start justify-center bg-primary/75 p-8 backdrop-blur-md lg:flex">
      <span className="flex-1 whitespace-nowrap font-mono text-2xl">
        Domenic Labbate
      </span>
      <div className="top-24 w-full flex-1 opacity-100">
        <nav className="flex items-center justify-center gap-16 border-primary-2">
          {LINKS.map((link) => (
            <HeaderLink key={link.title} {...link} />
          ))}
        </nav>
      </div>
      <div className="flex flex-1 justify-end">
        <button>
          <Moon strokeWidth={1} size={30} />
        </button>
      </div>
    </header>
  );
};

const Header = () => {
  return (
    <>
      <SmallHeader />
      <LargeHeader />
    </>
  );
};
export default Header;
