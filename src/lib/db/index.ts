"server only";

import mongoClient from "./mongodb";

export const DATABASE_NAME: string = "portfolio";
export const COLLECTION_NAME: string = "blogViews";

/**
 * Represents the MongoDB document structure for blog view data.
 * @typedef {Object} BlogViewDocument
 * @property {string} _id - The unique identifier for the blog post, using the slug as the `_id`.
 * @property {number} views - The number of views the blog post has received.
 */
export type BlogViewDocument = {
  _id: string; // The slug is used as the _id, for uniqueness
  views: number;
};

/**
 * Represents the business model for blog view data.
 * @typedef {Object} BlogView
 * @property {string} slug - The slug of the blog post, used as a unique identifier.
 * @property {number} views - The number of views the blog post has received.
 */
export type BlogView = {
  slug: string; // The slug is used as the _id, for uniqueness
  views: number;
};

/**
 * Converts a `BlogViewDocument` to a `BlogView` business model.
 * @param {BlogViewDocument} entity - The MongoDB document entity to be converted.
 * @returns {BlogView} The business model representation of the blog view data.
 */
function toBusinessModel(entity: BlogViewDocument): BlogView {
  return {
    slug: entity._id,
    views: entity.views,
  };
}

const client = mongoClient;
const db = client.db(DATABASE_NAME);
const collection = db.collection<BlogViewDocument>(COLLECTION_NAME);

/**
 * Retrieves all blog view records from the collection.
 * @returns {Promise<BlogView[]>} A promise that resolves to an array of blog view records.
 */
export async function getAllBlogViews(): Promise<BlogView[]> {
  const results = await collection.find({}).toArray();

  return results.map(toBusinessModel);
}

/**
 * Retrieves the number of views for a specific blog post identified by its slug.
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<number>} A promise that resolves to the number of views for the specified blog post. Returns 0 if not found.
 */
export async function getBlogViewsBySlug(slug: string): Promise<number> {
  const result = await collection.findOne({ _id: slug });

  return result?.views ?? 0;
}

/**
 * Increments the view count for a specific blog post identified by its slug.
 * If the blog post does not exist, it will be created with an initial view count of 1.
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<BlogView>} A promise that resolves to the updated BlogView.
 */
export async function incrementBlogViewsBySlug(
  slug: string
): Promise<BlogView> {
  const result = await collection.findOneAndUpdate(
    { _id: slug }, // Find the document by _id (which is the slug)
    { $inc: { views: 1 } }, // Increment the views field by 1
    { upsert: true, returnDocument: "after" } // Insert if not found, and return the updated document
  );

  if (!result) {
    return { slug, views: 1 };
  }

  return toBusinessModel(result);
}
