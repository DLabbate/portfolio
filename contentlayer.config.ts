import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "string", required: true },
    lastEdited: { type: "string", required: true },
    imageSrc: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (blog) => blog._raw.sourceFileName.replace(".mdx", ""),
    },
    // Inspired from https://yusuf.fyi/posts/contentlayer-table-of-contents
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
  },
}));

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: "material-theme-palenight",
    light: "material-theme-lighter",
  },
  keepBackground: false,
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
