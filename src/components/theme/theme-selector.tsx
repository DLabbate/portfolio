"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import * as motion from "@/components/animations/motion";

const THEMES = {
  light: "light",
  dark: "dark",
} as const;

const ICON_PROPS = {
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

  const isDark = theme === THEMES.dark;

  return (
    <>
      {isDark ? (
        <motion.button
          key="moon"
          data-test="moon"
          onClick={() => setTheme(THEMES.light)}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Moon
            {...ICON_PROPS}
            className="transition duration-200 hover:stroke-primary-200"
          />
        </motion.button>
      ) : (
        <motion.button
          key="sun"
          data-test="sun"
          onClick={() => setTheme(THEMES.dark)}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Sun
            {...ICON_PROPS}
            className="transition duration-200 hover:stroke-primary-600"
          />
        </motion.button>
      )}
    </>
  );
};

export default ThemeSelector;
