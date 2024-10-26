import {
  FormattedBlog,
  getAllTags,
  getSortedAndFilteredBlogs,
  getTagState,
  TagState,
} from "..";
import { expect } from "@jest/globals";

jest.mock("contentlayer/generated", () => ({
  allBlogs: [
    {
      title: "Blog 1",
      slug: "blog-1",
      tags: ["potato", "tomato"],
      published: "2023-01-01",
      imageSrc: "https://localhost/images/1",
    },
    {
      title: "Blog 2",
      slug: "blog-2",
      tags: ["potato"],
      published: "2022-06-15",
      imageSrc: "https://localhost/images/2",
    },
    {
      title: "Blog 3",
      slug: "blog-3",
      tags: ["cucumber"],
      published: "2021-10-20",
      imageSrc: "https://localhost/images/3",
    },
    {
      title: "Another Blog",
      slug: "blog-4",
      tags: ["potato", "cucumber"],
      published: "2020-05-05",
      imageSrc: "https://localhost/images/4",
    },
  ],
}));

jest.mock("@/lib/db", () => ({
  getAllBlogViews: jest.fn().mockResolvedValue([
    { slug: "blog-1", views: 150 },
    { slug: "blog-2", views: 300 },
    { slug: "blog-3", views: 50 },
    { slug: "blog-4", views: 200 },
  ]),
}));

const blogsWithViews: FormattedBlog[] = [
  {
    title: "Blog 1",
    slug: "blog-1",
    tags: ["potato", "tomato"],
    published: "2023-01-01",
    imageSrc: "https://localhost/images/1",
    views: 150,
  },
  {
    title: "Blog 2",
    slug: "blog-2",
    tags: ["potato"],
    published: "2022-06-15",
    imageSrc: "https://localhost/images/2",
    views: 300,
  },
  {
    title: "Blog 3",
    slug: "blog-3",
    tags: ["cucumber"],
    published: "2021-10-20",
    imageSrc: "https://localhost/images/3",
    views: 50,
  },
  {
    title: "Another Blog",
    slug: "blog-4",
    tags: ["potato", "cucumber"],
    published: "2020-05-05",
    imageSrc: "https://localhost/images/4",
    views: 200,
  },
];

describe("getAllTags", () => {
  it("should retrieve a unique and formatted list of tags", () => {
    const tags = getAllTags();
    expect(tags).toEqual(["potato", "tomato", "cucumber"]);
  });
});

describe("getTagState", () => {
  type GetTagStateTestCase = {
    tag: string;
    selectedTags: string[];
    expectedState: TagState;
  };

  test.each<GetTagStateTestCase>([
    { tag: "potato", selectedTags: ["tomato"], expectedState: "neutral" },
    {
      tag: "cucumber",
      selectedTags: ["tomato", "potato"],
      expectedState: "disabled",
    },
    { tag: "potato", selectedTags: ["potato"], expectedState: "active" },
    { tag: "cucumber", selectedTags: [], expectedState: "neutral" },
  ])(
    "returns $expectedState for tag $tag when selectedTags are $selectedTags",
    ({ tag, selectedTags, expectedState }) => {
      const state = getTagState(tag, blogsWithViews, selectedTags);
      expect(state).toBe(expectedState);
    }
  );
});

describe("getSortedAndFilteredBlogs", () => {
  type GetSortedAndFilteredBlogsTestCase = {
    searchText: string | undefined;
    tags: string[];
    sort: "date-asc" | "date-desc" | "views-asc" | "views-desc" | undefined;
    expectedBlogs: FormattedBlog[];
  };

  test.each<GetSortedAndFilteredBlogsTestCase>([
    {
      searchText: undefined,
      tags: [],
      sort: undefined,
      expectedBlogs: [
        blogsWithViews[0],
        blogsWithViews[1],
        blogsWithViews[2],
        blogsWithViews[3],
      ],
    },
    {
      searchText: "Blog",
      tags: [],
      sort: "date-desc",
      expectedBlogs: [
        blogsWithViews[0],
        blogsWithViews[1],
        blogsWithViews[2],
        blogsWithViews[3],
      ],
    },
    {
      searchText: "Another",
      tags: [],
      sort: undefined,
      expectedBlogs: [blogsWithViews[3]],
    },
    {
      searchText: undefined,
      tags: ["potato"],
      sort: "views-desc",
      expectedBlogs: [blogsWithViews[1], blogsWithViews[3], blogsWithViews[0]],
    },
    {
      searchText: undefined,
      tags: ["cucumber"],
      sort: "views-asc",
      expectedBlogs: [blogsWithViews[2], blogsWithViews[3]],
    },
    {
      searchText: undefined,
      tags: ["potato", "cucumber"],
      sort: "date-asc",
      expectedBlogs: [blogsWithViews[3]],
    },
    {
      searchText: "Blog",
      tags: ["potato"],
      sort: "views-asc",
      expectedBlogs: [blogsWithViews[0], blogsWithViews[3], blogsWithViews[1]],
    },
    {
      searchText: "Blog",
      tags: ["potato", "cucumber"],
      sort: "date-desc",
      expectedBlogs: [blogsWithViews[3]],
    },
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
