"use client";

import { incrementBlogViewsBySlug } from "@/app/actions";
import React, { useEffect } from "react";

type Props = {
  slug: string;
  views: number;
  trackView: boolean;
};

const ViewCounter = ({ slug, views, trackView = false }: Props) => {
  useEffect(() => {
    if (trackView) {
      incrementBlogViewsBySlug(slug);
    }
  }, [slug, trackView]);

  return (
    <span className="inline-block h-fit w-auto whitespace-nowrap rounded-sm bg-primary-200 p-1 font-mono text-sm dark:bg-primary-800">
      {views.toLocaleString("en-US")} Views
    </span>
  );
};

export default ViewCounter;
