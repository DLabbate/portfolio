"server only";

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "./schema";
import { cache } from "react";
import { blogViews } from "./schema";
import { sql } from "drizzle-orm";

// Create database connection
const connection = connect({
  url: process.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema });

export const getAllBlogViews = cache(() => {
  return db.query.blogViews.findMany().execute();
});

export const getBlogViewsBySlug = cache((slug: string) => {
  return db.query.blogViews
    .findFirst({ where: (blog, { eq }) => eq(blog.slug, slug) })
    .execute();
});

export async function incrementBlogViewsBySlug(slug: string) {
  return db
    .insert(blogViews)
    .values({ slug, views: 1 })
    .onDuplicateKeyUpdate({ set: { views: sql`${blogViews.views} + 1` } })
    .execute();
}
