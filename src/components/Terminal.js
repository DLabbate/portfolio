import React from "react";
import "./Terminal.css";

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__button terminal__button--red"></div>
        <div className="terminal__button terminal__button--yellow"></div>
        <div className="terminal__button terminal__button--green"></div>
      </div>
      <p className="terminal__code">{">> Hello World!"}</p>
      <p className="terminal__code">{">> My Name is Domenic"}</p>
    </div>
  );
};

export default Terminal;
