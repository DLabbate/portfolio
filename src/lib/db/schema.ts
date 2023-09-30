import { mysqlTable, varchar, int } from "drizzle-orm/mysql-core";

export const blogViews = mysqlTable("blog_views", {
  slug: varchar("slug", { length: 255 }).primaryKey().notNull(),
  views: int("views").notNull().default(0),
});
