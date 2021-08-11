import React from "react";
import "./Terminal.css";
import Typewriter from "typewriter-effect";

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__button terminal__button--red"></div>
        <div className="terminal__button terminal__button--yellow"></div>
        <div className="terminal__button terminal__button--green"></div>
      </div>
      <p className="terminal__code">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString(">> Hello World!\n")
              .typeString(">> My name is Domenic.\n\n")
              .typeString(
                ">> I am a Computer Engineering student at Concordia University.\n"
              )
              .typeString(">> I'm graduating soon! December 2021.\n\n")
              .typeString(
                ">> Here are a couple things you should know about me.\n"
              )
              .typeString(
                "\t>> I have a passion for problem solving, and I am capable of overcoming difficulties.\n"
              )
              .typeString(
                "\t>> I'm resourceful. I might not have all the answers, but I'll figure it out!\n"
              )
              .typeString(
                "\t>> I place an emphasis on self-improvement. I'm always eager to get better.\n"
              )
              .pauseFor(10000)
              .deleteAll(1)
              .start();
          }}
        />
      </p>
    </div>
  );
};

export default Terminal;
