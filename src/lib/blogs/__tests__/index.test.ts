import { describe, it, expect, vi } from "vitest";
import { Blog } from "contentlayer/generated";
import { getSortedAndFilteredBlogs } from "..";

const blogs = [
  {
    title: "Blog 1",
    slug: "blog-1",
    tags: ["tag1", "tag2"],
    views: 150,
    published: "2023-01-01",
  },
  {
    title: "Blog 2",
    slug: "blog-2",
    tags: ["tag1"],
    views: 300,
    published: "2022-06-15",
  },
  {
    title: "Blog 3",
    slug: "blog-3",
    tags: ["tag3"],
    views: 50,
    published: "2021-10-20",
  },
];

vi.mock("../../../../.contentlayer/generated", () => ({
  allBlogs: [
    {
      title: "Blog 1",
      slug: "blog-1",
      tags: ["tag1", "tag2"],
      views: 150,
      published: "2023-01-01",
    },
    {
      title: "Blog 2",
      slug: "blog-2",
      tags: ["tag1"],
      views: 300,
      published: "2022-06-15",
    },
    {
      title: "Blog 3",
      slug: "blog-3",
      tags: ["tag3"],
      views: 50,
      published: "2021-10-20",
    },
  ],
}));

vi.mock("../../db", () => ({
  getAllBlogViews: vi.fn().mockResolvedValue([
    { slug: "blog-1", views: 150 },
    { slug: "blog-2", views: 300 },
    { slug: "blog-3", views: 50 },
  ]),
}));

describe("getSortedAndFilteredBlogs", () => {
  type GetSortedAndFilteredBlogsTestCase = {
    searchText: string | undefined;
    tags: string[];
    sort: "date-asc" | "views-desc" | undefined;
    expectedBlogs: Partial<Blog>[]; // Reference the type of the blog array
  };

  type FormattedBlog = {
    title: string;
    slug: string;
    tags: string[];
    views: number;
    published: string;
  };

  it.each<GetSortedAndFilteredBlogsTestCase>([
    // Test cases: { searchText, tags, sort, expectedBlogs }
    {
      searchText: "Blog 1",
      tags: [],
      sort: undefined,
      expectedBlogs: [blogs[0]],
    }, // Matching search text
    {
      searchText: undefined,
      tags: ["tag1"],
      sort: undefined,
      expectedBlogs: [{ ...blogs[0] }, { ...blogs[1] }],
    }, // Matching tags
    {
      searchText: undefined,
      tags: [],
      sort: "date-asc",
      expectedBlogs: [{ ...blogs[2] }, { ...blogs[1] }, { ...blogs[0] }],
    }, // Sort by date asc
    {
      searchText: undefined,
      tags: [],
      sort: "views-desc",
      expectedBlogs: [{ ...blogs[1] }, { ...blogs[0] }, { ...blogs[2] }],
    }, // Sort by views desc
  ])(
    "returns correct blogs for searchText: $searchText, tags: $tags, sort: $sort",
    async ({ searchText, tags, sort, expectedBlogs }) => {
      const blogsResult: FormattedBlog[] = await getSortedAndFilteredBlogs(
        searchText,
        tags,
        sort
      );

      expect(blogsResult).toEqual(expectedBlogs);
    }
  );
});
