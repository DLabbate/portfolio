import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
});
