import React from "react";
import "./Section.css";

const Section = ({ title, ...props }) => {
  return (
    <div className="section">
      <h1 className="section__title">{title}</h1>
      {props.children}
    </div>
  );
};

export default Section;
