"use client";

import React from "react";
import { Moon } from "react-feather";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

const HeaderLink = ({ title, href }: Props) => {
  return (
    <motion.li whileHover="hover" className="relative cursor-pointer">
      <Link href={href}>{title}</Link>
      <div className="flex justify-center">
        <motion.div
          className="absolute mt-1 h-1 bg-neutral-50"
          variants={{
            hover: {
              width: "100%",
            },
          }}
        />
      </div>
    </motion.li>
  );
};

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center bg-primary p-8">
      <span className="flex-1 font-mono text-2xl">Domenic Labbate</span>
      <ul className="flex flex-1 items-center justify-center gap-16 text-xl">
        <HeaderLink title="Home" href="/" />
        <HeaderLink title="Portfolio" href="/portfolio" />
        <HeaderLink title="Blogs" href="/blogs" />
      </ul>
      <button className="flex flex-1 justify-end">
        <Moon strokeWidth={1} size={30} />
      </button>
    </nav>
  );
};

export default Header;
