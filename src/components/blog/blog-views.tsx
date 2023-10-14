"use client";

import React, { useEffect } from "react";

type Props = {
  slug: string;
  views: number;
  trackView: boolean;
};

const BlogViews = ({ slug, views, trackView = false }: Props) => {
  useEffect(() => {
    if (trackView) {
      fetch(`/blogs/${slug}/views`, {
        method: "POST",
      });
    }
  }, [slug, trackView]);

  return (
    <span
      data-test="view-counter"
      className="inline-block h-fit w-auto whitespace-nowrap rounded-sm bg-primary-200 p-1 font-mono text-sm dark:bg-primary-800"
    >
      {views.toLocaleString("en-US")} Views
    </span>
  );
};

export default BlogViews;
