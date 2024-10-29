"server only";

import mongoClient from "./mongodb";

const databaseName = "portfolio-dev";
const collectionName = "blog-views";

interface BlogView {
  _id: string; // The slug is used as the _id, for uniqueness
  views: number;
}

const client = mongoClient;
const db = client.db(databaseName);

/**
 * Retrieves all blog view records from the collection.
 * @returns {Promise<BlogView[]>} A promise that resolves to an array of blog view records.
 */
export async function getAllBlogViews(): Promise<BlogView[]> {
  const results = await db
    .collection<BlogView>(collectionName)
    .find({})
    .toArray();

  return results;
}

/**
 * Retrieves the number of views for a specific blog post identified by its slug.
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<number>} A promise that resolves to the number of views for the specified blog post. Returns 0 if not found.
 */
export async function getBlogViewsBySlug(slug: string): Promise<number> {
  const result = await db
    .collection<BlogView>(collectionName)
    .findOne({ _id: slug });

  return result?.views ?? 0;
}

/**
 * Increments the view count for a specific blog post identified by its slug.
 * If the blog post does not exist, it will be created with an initial view count of 1.
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<UpdateResult<BlogView>>} A promise that resolves to the result of the update operation.
 */
export async function incrementBlogViewsBySlug(slug: string) {
  return db.collection<BlogView>(collectionName).updateOne(
    { _id: slug }, // Find the document by _id (which is the slug)
    { $inc: { views: 1 } }, // Increment the views field by 1
    { upsert: true } // Insert if not found
  );
}
