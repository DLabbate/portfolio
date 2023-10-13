import { Mdx } from "@/components/mdx";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

const findProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug);

export const generateStaticParams = async () =>
  allProjects.map(({ slug }) => {
    return { slug };
  });

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = findProjectBySlug(params.slug);
  if (!project) return;
  return { title: project.title };
};

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = findProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-2 overflow-hidden">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <span className="text-lg italic">{project.subtitle}</span>
      </div>
      <Mdx code={project.body.code} />
    </>
  );
};

export default ProjectPage;
