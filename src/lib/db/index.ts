"server only";

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "./schema";
import { cache } from "react";

// Create database connection
const connection = connect({
  url: process.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema });

export const revalidate = 60;

export const getAllBlogViews = () => {
  return db.query.blogViews.findMany().execute();
};

export const getBlogViewsBySlug = cache((slug: string) => {
  return db.query.blogViews
    .findFirst({ where: (blog, { eq }) => eq(blog.slug, slug) })
    .execute();
});
