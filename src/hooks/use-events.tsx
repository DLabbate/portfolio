import { useEffect } from "react";

export const useMouseClick = (handleClick: (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const useKeyDown = (handleKeyDown: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
};
