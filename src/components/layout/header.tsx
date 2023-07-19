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
  onClick: () => void;
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
        onClick={isSmallDevice ? onClick : () => {}}
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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <motion.header
      animate={mobileMenuOpen ? "open" : "closed"}
      className="fixed top-0 z-50 h-auto w-full overflow-hidden bg-primary/75 backdrop-blur-md"
      variants={{ open: { height: "100%" } }}
      transition={{ ease: "linear" }}
    >
      <div className="flex h-full w-full items-start justify-center p-8">
        <span className="flex-1 whitespace-nowrap font-mono text-2xl">
          Domenic Labbate
        </span>
        <motion.div
          className="absolute top-24 w-full flex-1 opacity-0 lg:static lg:opacity-100"
          variants={{ open: { opacity: 1 } }}
        >
          <motion.nav className="flex flex-col items-center justify-center border-y border-primary-2 lg:flex-row lg:gap-16 lg:border-y-0">
            {LINKS.map((link) => (
              <HeaderLink key={link.title} {...link} onClick={toggleMenu} />
            ))}
          </motion.nav>
        </motion.div>
        <div className="flex flex-1 justify-end gap-4 lg:flex">
          <button>
            <Moon strokeWidth={1} size={30} />
          </button>
          <button className="lg:hidden" onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <X strokeWidth={1} size={30} />
            ) : (
              <Menu strokeWidth={1} size={30} />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
