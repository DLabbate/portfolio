"use client";

import { useEffect, useState } from "react";
import * as motion from "@/components/animations/motion";

type Props = {
  text: string;
};

const Terminal = ({ text }: Props) => {
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
  }, [text]);

  return (
    <div className="flex aspect-square w-full max-w-[40rem] flex-col items-start justify-start rounded-lg border border-primary-200 bg-white font-mono shadow dark:border-primary-800 dark:bg-primary-900 sm:aspect-[4/3]">
      <div className="flex h-4 gap-2 p-2">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="h-4 w-4 rounded-full border border-primary-800"
          />
        ))}
      </div>
      <span className="inline flex-1 overflow-hidden whitespace-break-spaces p-8">
        {currentText}
        <motion.span
          className="inline-block h-6 w-3 bg-primary-400 align-top dark:bg-white"
          animate={{ opacity: [0, 1.0, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </span>
    </div>
  );
};

export default Terminal;
