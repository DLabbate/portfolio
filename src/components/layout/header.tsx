"use client";

import React, { useState } from "react";
import { Menu, Moon } from "react-feather";
import Link from "next/link";
import * as motion from "@/components/animations/motion";

type Props = {
  title: string;
  href: string;
};

const HeaderLink = ({ title, href }: Props) => {
  return (
    <motion.li
      whileHover="hover"
      className="relative flex w-full cursor-pointer items-center justify-center border-b border-t border-primary-2 p-8 text-xl lg:block lg:w-auto lg:border-0 lg:p-0 "
    >
      <Link className="lg:h-auto lg:w-auto" href={href}>
        {title}
      </Link>
      <motion.div
        className="hidden h-1 bg-neutral-50 lg:absolute lg:block"
        variants={{ hover: { width: "100%" } }}
      />
    </motion.li>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.header
      layout
      animate={mobileMenuOpen ? "open" : "closed"}
      className="fixed top-0 z-50 h-24 w-full bg-primary opacity-95"
      variants={{ open: { height: "100vh" } }}
      transition={{ ease: "linear" }}
    >
      <div className="flex h-full w-full items-start justify-center p-8">
        <span className="flex-1 whitespace-nowrap font-mono text-2xl">
          Domenic Labbate
        </span>
        <motion.ul
          layout
          className="absolute top-24 flex w-full flex-1 flex-col items-center justify-center opacity-0 lg:static lg:flex-row lg:gap-16 lg:opacity-100"
          variants={{ open: { opacity: 1 } }}
        >
          <HeaderLink title="Home" href="/" />
          <HeaderLink title="Portfolio" href="/portfolio" />
          <HeaderLink title="Blogs" href="/blogs" />
        </motion.ul>
        <button className="hidden flex-1 justify-end lg:flex">
          <Moon strokeWidth={1} size={30} />
        </button>
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu strokeWidth={1} size={30} />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
