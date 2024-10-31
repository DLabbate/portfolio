/**
 * @jest-environment node
 */

import { getAllBlogViews, incrementBlogViewsBySlug } from "..";
import client from "../mongodb";

afterAll(async () => {
  await client.close(); // Ensure the MongoClient instance is closed
});

describe("mongodb integration tests", () => {
  it("should successfully set & get information from the database", async () => {
    await incrementBlogViewsBySlug("test-1-slug");
    const test = await getAllBlogViews();
  });
});
