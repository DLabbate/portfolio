import React from "react";
import "./Terminal.css";
import Typewriter from "typewriter-effect";

const Terminal = () => {
  return (
    <div className="terminal terminal--active">
      <div className="terminal__content">
        <div className="terminal__header">
          <div className="terminal__button terminal__button--red"></div>
          <div className="terminal__button terminal__button--yellow"></div>
          <div className="terminal__button terminal__button--green"></div>
        </div>
        <div className="terminal__code">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(">> Hello World!\n")
                .typeString(">> My name is Domenic.\n\n")
                .typeString(">> I'm a Computer Engineering student.\n")
                .typeString(">> I'm graduating soon! December 2021.\n\n")
                .typeString(
                  ">> Here are some things you should know about me.\n"
                )
                .typeString("\t>> I have a passion for problem solving.\n")
                .typeString(
                  "\t>> I'm resourceful and can overcome difficulties.\n"
                )
                .typeString("\t>> I place an emphasis on self-improvement.\n")
                .pauseFor(10000)
                .deleteAll(1)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
