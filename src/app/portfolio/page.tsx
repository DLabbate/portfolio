import Accomplishment from "@/components/accomplishment";
import Section from "@/components/layout/section";
import Project from "@/components/project";
import Timeline from "@/components/timeline";
import {
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  ACCOMPLISHMENTS,
} from "@/constants/profile";

const Portfolio = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-16">
      <Section title="Experience">
        <Timeline data={EXPERIENCE} />
      </Section>
      <Section title="Education">
        <Timeline data={EDUCATION} />
      </Section>
      <Section title="Projects">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {PROJECTS.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </Section>
      <Section title="Accomplishments">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {ACCOMPLISHMENTS.map((accomplishment) => (
            <Accomplishment key={accomplishment.title} {...accomplishment} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
