import React from "react";
import "./Accomplishment.css";
import { FiLink } from "react-icons/fi";

const Accomplishment = ({ title, organization, description, year, link }) => {
  return (
    <div className="accomplishment">
      <h3>
        {organization} — {title}
      </h3>
      <p>{description}</p>
      <span className="accomplishment__year">{year}</span>
      {link ? (
        <a className="accomplishment__link" href={link}>
          <FiLink className="accomplishment__icon" />
        </a>
      ) : null}
    </div>
  );
};

export default Accomplishment;
