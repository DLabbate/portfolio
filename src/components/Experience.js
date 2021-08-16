import React from "react";
import "./Experience.css";
import Skill from "./Skill";

const Experience = ({
  logoSrc,
  title,
  company,
  year,
  content,
  skills,
  url,
}) => {
  return (
    <div className="experience">
      <div className="experience__logo-container">
        <a href={url}>
          <img className="experience__logo" src={logoSrc} alt="Experience" />
        </a>
      </div>
      <div className="experience__title-container">
        <h3>{title}</h3>
        <h4>{company}</h4>
      </div>
      <div className="experience__year-container">{year}</div>
      <div className="experience__content-container">
        <ul>
          {content.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="experience__skills-container">
        {skills.map((item) => {
          return <Skill label={item} key={item} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
