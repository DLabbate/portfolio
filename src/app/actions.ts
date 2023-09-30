"use server";

import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import { blogViews } from "drizzle/schema";

export async function incrementBlogViewsBySlug(slug: string) {
  db.insert(blogViews)
    .values({ slug, views: 1 })
    .onDuplicateKeyUpdate({ set: { views: sql`${blogViews.views} + 1` } })
    .execute();
}
