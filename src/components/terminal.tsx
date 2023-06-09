"use client";

import React, { useEffect, useState } from "react";
import { MotionSpan } from "./animations/motion";

const text = `Hello World!

My name is Domenic.

Here are some things you should know about me.
  🤓 I'm a Software Engineer.
  🧠 I have a passion for learning & self improvement.
  📚 I'm resourceful and can overcome difficulties.
`;

const Terminal = () => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      // Slice without splitting unicode characters (emojis)
      // https://stackoverflow.com/questions/52526719/javascript-substring-without-splitting-emoji
      setCurrentText(Array.from(text).slice(0, index).join(""));

      const isLastChar = index === text.length - 1;

      isLastChar ? clearInterval(intervalId) : index++;
    }, 75);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex aspect-[4/3] w-full max-w-[40rem] flex-col items-start justify-start rounded-lg border border-primary-2 bg-primary-1 font-mono">
      <div className="flex h-4 gap-2 p-2">
        <div className="h-4 w-4 rounded-full border border-primary-2" />
        <div className="h-4 w-4 rounded-full border border-primary-2" />
        <div className="h-4 w-4 rounded-full border border-primary-2" />
      </div>
      <span className="inline flex-1 overflow-hidden whitespace-break-spaces p-8">
        {currentText}
        <MotionSpan
          className="inline-block h-6 w-3 bg-white align-top"
          animate={{ opacity: [0, 1.0, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </span>
    </div>
  );
};

export default Terminal;
