/**
 * Custom wrapper around framer motion component to support Next13 client components.
 * @see https://github.com/framer/motion/issues/2054
 */

"use client";
import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionAnchor = motion.a;
export const MotionSpan = motion.span;
export const MotionListItem = motion.li;
export const MotionUnorderedList = motion.ul;
