"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

const themes = {
  light: "light",
  dark: "dark",
} as const;

const iconProps = {
  strokeWidth: 1,
  size: 30,
  className: "stroke-light dark:stroke-dark",
} as const;

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch
  // See https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === themes.dark;

  return (
    <>
      {isDark ? (
        <button onClick={() => setTheme(themes.light)}>
          <Moon {...iconProps} />
        </button>
      ) : (
        <button onClick={() => setTheme(themes.dark)}>
          <Sun {...iconProps} />
        </button>
      )}
    </>
  );
};

export default ThemeSelector;
