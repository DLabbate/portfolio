import React from "react";
import "./Accomplishment.css";
import { FiLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const Accomplishment = ({ title, organization, description, year, link }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  return (
    <div
      className={
        inView ? "accomplishment accomplishment--active" : "accomplishment"
      }
      ref={ref}
    >
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
