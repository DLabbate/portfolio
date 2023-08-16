import { Mdx } from "@/components/mdx";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () =>
  allProjects.map(({ slug }) => {
    return { slug };
  });

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) return;
  return { title: project.title };
};

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) return notFound();

  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <span className="text-lg italic">{project.subtitle}</span>
      </div>
      <Mdx code={project.body.code} />
    </div>
  );
};

export default ProjectPage;
