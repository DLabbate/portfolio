/**
 * @jest-environment node
 */

import { Collection } from "mongodb";
import {
  BlogViewDocument,
  COLLECTION_NAME,
  DATABASE_NAME,
  getAllBlogViews,
  getBlogViewsBySlug,
  incrementBlogViewsBySlug,
} from "..";
import client from "../mongodb";

describe("mongodb integration tests", () => {
  let db;
  let collection: Collection<BlogViewDocument>;

  async function seedDatabase(documents: BlogViewDocument[]): Promise<void> {
    await collection.insertMany(documents);
  }

  beforeAll(async () => {
    await client.connect(); // Connect using mongodb-memory-server instance

    db = client.db(DATABASE_NAME);
    collection = db.collection<BlogViewDocument>(COLLECTION_NAME);
  });

  afterAll(async () => {
    await client.close(); // Close the MongoClient connection
  });

  afterEach(async () => {
    await collection.deleteMany({}); // Clear collection after each test
  });

  describe("getAllBlogViews", () => {
    it("should retrieve all blog view records", async () => {
      const testData = [
        { _id: "test-slug-1", views: 5 },
        { _id: "test-slug-2", views: 10 },
        { _id: "test-slug-3", views: 115 },
      ];
      await seedDatabase(testData);

      const result = await getAllBlogViews();

      expect(result).toEqual([
        { slug: "test-slug-1", views: 5 },
        { slug: "test-slug-2", views: 10 },
        { slug: "test-slug-3", views: 115 },
      ]);
    });

    it("should return an empty array if no blog views are found", async () => {
      const result = await getAllBlogViews();
      expect(result).toEqual([]);
    });
  });

  describe("getBlogViewsBySlug", () => {
    it("should return the views count for a specific slug", async () => {
      const testData = [
        { _id: "test-slug-1", views: 5 },
        { _id: "test-slug-2", views: 10 },
        { _id: "test-slug-3", views: 115 },
      ];
      await seedDatabase(testData);

      const result = await getBlogViewsBySlug("test-slug-3");

      expect(result).toEqual(115);
    });

    it("should return 0 if the slug does not exist", async () => {
      const result = await getBlogViewsBySlug("non-existing-slug");
      expect(result).toBe(0);
    });
  });

  describe("incrementBlogViewsBySlug", () => {
    it("should increment views count for an existing slug", async () => {
      const testData = [
        { _id: "test-slug-1", views: 5 },
        { _id: "test-slug-2", views: 10 },
        { _id: "test-slug-3", views: 115 },
      ];
      await seedDatabase(testData);

      const result = await incrementBlogViewsBySlug("test-slug-3");
      expect(result).toEqual({
        slug: "test-slug-3",
        views: 116,
      });
    });

    it("should create a new document with views count 1 if slug does not exist", async () => {
      const result = await incrementBlogViewsBySlug("new-slug");

      expect(result).toEqual({
        slug: "new-slug",
        views: 1,
      });
    });
  });
});
