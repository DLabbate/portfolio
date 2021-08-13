import React from "react";
import "./Section.css";

const Section = ({ title, id, ...props }) => {
  return (
    <div className="section" id={id}>
      <h1 className="section__title">{title}</h1>
      {props.children}
    </div>
  );
};

export default Section;
