"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Moon, X } from "react-feather";
import Link from "next/link";
import * as motion from "@/components/animations/motion";
import SocialLink from "../social-link";
import { SOCIAL_MEDIA } from "@/constants/profile";

type Props = {
  title: string;
  href: string;
};

const HeaderLink = ({ title, href }: Props) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative flex w-full cursor-pointer items-center justify-center border-y border-primary-2 p-8 text-xl lg:block lg:w-auto lg:border-0 lg:p-0 "
    >
      <Link className="lg:h-auto lg:w-auto" href={href}>
        {title}
      </Link>
      <motion.div
        className="hidden h-1 bg-neutral-50 lg:absolute lg:block"
        variants={{ hover: { width: "100%" } }}
      />
    </motion.div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <motion.header
      animate={mobileMenuOpen ? "open" : "closed"}
      className="fixed top-0 z-50 h-auto w-full overflow-hidden bg-primary opacity-95"
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
            <HeaderLink title="Home" href="/" />
            <HeaderLink title="Portfolio" href="/portfolio" />
            <HeaderLink title="Blogs" href="/blogs" />
          </motion.nav>
          <div className="m-8 flex items-center justify-center gap-8 lg:hidden">
            {SOCIAL_MEDIA.map((item) => (
              <SocialLink key={item.platform} {...item} />
            ))}
          </div>
        </motion.div>
        <div className="flex flex-1 justify-end gap-4 lg:flex">
          <button>
            <Moon strokeWidth={1} size={30} />
          </button>
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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
