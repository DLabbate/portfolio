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

export const useScroll = (handleScrollEvent: (event: Event) => void) => {
  useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent);
    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  });
};
