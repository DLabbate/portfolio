import React from "react";
import "./Project.css";
import Skill from "./Skill";

const Project = ({ link, title, description, imageSrc, skills, videoSrc }) => {
  return (
    <a className="project" href={link}>
      {videoSrc ? (
        <video
          className="project__thumbnail"
          src={videoSrc}
          autoPlay
          muted
          loop
        />
      ) : (
        <img className="project__thumbnail" src={imageSrc} alt="Project" />
      )}
      <p className="project__description">
        <span className="project__title">{title}</span>
        {" " + description}
      </p>
      <div className="project__skills">
        {skills.map((item) => {
          return <Skill label={item} key={item} />;
        })}
      </div>
    </a>
  );
};

export default Project;
