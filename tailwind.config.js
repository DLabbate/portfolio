/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        timeline: "auto 1fr auto",
        "timeline-small": "auto 1fr",
        accomplishment: "1fr auto",
      },
      textColor: {
        light: {
          DEFAULT: "#212121",
          medium: "#666666",
          disabled: "#9E9E9E",
        },
        dark: {
          DEFAULT: "#e2e2e3",
          medium: "#a5a5a9",
          disabled: "#74747a",
        },
      },
      colors: {
        // primary: {
        //   1: "#23232c",
        //   2: "#626269",
        //   DEFAULT: "#1E1F28",
        // },
        // primary: {
        //   1: "#25262e",
        //   2: "#34353d",
        //   DEFAULT: "#1E1F28",
        // },
        primary: {
          DEFAULT: "#181920",
          1: "#1e1f28",
          2: "#2c2c35",
        },
        // primary: {
        //   1: "#1b1e29",
        //   2: "#2d303b",
        //   DEFAULT: "#161925",
        // },
      },
      fontFamily: {
        sans: ["var(--font-quicksand)"],
        mono: ["var(--font-spacemono)"],
      },
    },
  },
  plugins: [],
};
