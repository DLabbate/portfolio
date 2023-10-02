"use server";

import { db } from "@/lib/db";
import { blogViews } from "@/lib/db/schema";
import { sql } from "drizzle-orm";

export async function incrementBlogViewsBySlug(slug: string) {
  db.insert(blogViews)
    .values({ slug, views: 1 })
    .onDuplicateKeyUpdate({ set: { views: sql`${blogViews.views} + 1` } })
    .execute();
}
