import React from "react";
import "./Home.css";
import Experience from "../content/Experience";
import Section from "../wrappers/Section";
import Sidebar from "../navigation/Sidebar";
import Terminal from "../general/Terminal";
import Project from "../content/Project";
import {
  sidebarItems,
  education,
  workExperience,
  projects,
  accomplishments,
  volunter,
  technologies,
  contact,
} from "../../constants/profile";
import Accomplishment from "../content/Accomplishment";
import DevIcon from "../shared/DevIcon";
import { useInView } from "react-intersection-observer";
import ContactLink from "../shared/ContactLink";
import Content from "../wrappers/Content";

const Home = () => {
  const [terminalRef, terminalInView] = useInView({
    threshold: 0,
  });
  const [accomplishmentsRef, accomplishmentsInView] = useInView({
    threshold: 0.3,
  });
  return (
    <>
      <Sidebar sidebarItems={sidebarItems} />
      <Content>
        <Section title={"About Me"} id="about-me">
          <div className="terminal-container" ref={terminalRef}>
            <Terminal inView={terminalInView} />
          </div>

          <div className="technologies-container">
            {technologies.map((name) => {
              return <DevIcon name={name} key={name} />;
            })}
          </div>
        </Section>
        <Section title={"Education"} id="education">
          {education.map((item, index) => {
            return <Experience {...item} key={index} />;
          })}
        </Section>
        <Section title={"Experience"} id="experience">
          {workExperience.map((item, index) => {
            return <Experience {...item} key={index} />;
          })}
        </Section>
        <Section title={"Projects"} id="projects">
          <div className="projects-container">
            {projects.map((item, index) => {
              return <Project {...item} key={index} />;
            })}
          </div>
        </Section>
        <Section title={"Accomplishments"} id="accomplishments">
          <div className="accomplishments-container" ref={accomplishmentsRef}>
            {accomplishments.map((item, index) => {
              return (
                <Accomplishment
                  {...item}
                  inView={accomplishmentsInView}
                  key={index}
                />
              );
            })}
          </div>
        </Section>
        <Section title={"Volunteer"} id="volunteer">
          <div className="accomplishments-container">
            {volunter.map((item, index) => {
              return <Experience {...item} key={index} />;
            })}
          </div>
        </Section>
        <Section title={"Contact"} id="contact">
          <div className="contact-container">
            {contact.map((item, index) => {
              return <ContactLink {...item} key={index} />;
            })}
          </div>
        </Section>
      </Content>
    </>
  );
};

export default Home;
