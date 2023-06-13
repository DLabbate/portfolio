/**
 * Custom wrapper around framer motion component to support Next13 client components.
 * @see https://github.com/framer/motion/issues/2054
 */

"use client";

import { motion } from "framer-motion";

export const div = motion.div;
export const a = motion.a;
export const span = motion.span;
export const li = motion.li;
export const ul = motion.ul;
