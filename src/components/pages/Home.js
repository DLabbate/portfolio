import React from "react";
import "./Home.css";
import Experience from "../Experience";
import Section from "../wrappers/Section";
import Sidebar from "../navigation/Sidebar";
import Terminal from "../Terminal";
import Project from "../Project";
import {
  sidebarItems,
  education,
  workExperience,
  projects,
  accomplishments,
  volunter,
  technologies,
} from "../../constants/profile";
import Accomplishment from "../Accomplishment";
import DevIcon from "../DevIcon";

const Home = () => {
  return (
    <>
      <Sidebar sidebarItems={sidebarItems} />
      <div className="content">
        <Section title={"About Me"} id="about-me">
          <Terminal />
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
          <div className="accomplishments-container">
            {accomplishments.map((item, index) => {
              return <Accomplishment {...item} key={index} />;
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
      </div>
    </>
  );
};

export default Home;
