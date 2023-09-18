/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        timeline: "auto 1fr auto",
        "timeline-small": "auto 1fr",
        accomplishment: "1fr auto",
      },
      colors: {
        primary: {
          50: "#F3F4F6",
          100: "#E5E6EB",
          200: "#CBCCD8",
          300: "#ADB0C2",
          400: "#9396AE",
          500: "#767A98",
          600: "#606480",
          700: "#4C4F66",
          800: "#373949",
          900: "#23242F",
          950: "#181920",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)"],
        mono: ["var(--font-spacemono)"],
      },
      typography: ({ theme }) => ({
        primary: {
          css: {
            "--tw-prose-body": theme("colors.primary[800]"),
            "--tw-prose-headings": theme("colors.primary[900]"),
            "--tw-prose-lead": theme("colors.primary[700]"),
            "--tw-prose-links": theme("colors.primary[900]"),
            "--tw-prose-bold": theme("colors.primary[900]"),
            "--tw-prose-counters": theme("colors.primary[600]"),
            "--tw-prose-bullets": theme("colors.primary[400]"),
            "--tw-prose-hr": theme("colors.primary[300]"),
            "--tw-prose-quotes": theme("colors.primary[900]"),
            "--tw-prose-quote-borders": theme("colors.primary[300]"),
            "--tw-prose-captions": theme("colors.primary[700]"),
            "--tw-prose-code": theme("colors.primary[900]"),
            "--tw-prose-pre-code": theme("colors.primary[100]"),
            "--tw-prose-pre-bg": theme("colors.primary[900]"),
            "--tw-prose-th-borders": theme("colors.primary[300]"),
            "--tw-prose-td-borders": theme("colors.primary[200]"),
            "--tw-prose-invert-body": theme("colors.primary[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.primary[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.primary[400]"),
            "--tw-prose-invert-bullets": theme("colors.primary[600]"),
            "--tw-prose-invert-hr": theme("colors.primary[700]"),
            "--tw-prose-invert-quotes": theme("colors.primary[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.primary[700]"),
            "--tw-prose-invert-captions": theme("colors.primary[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.primary[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.primary[600]"),
            "--tw-prose-invert-td-borders": theme("colors.primary[700]"),
          },
        },
      }),
      textColor: ({ theme }) => ({
        light: {
          DEFAULT: theme("colors.primary[900]"),
          medium: theme("colors.primary[600]"),
          disabled: theme("colors.primary[500]"),
        },
        dark: {
          DEFAULT: theme("colors.white"),
          medium: theme("colors.primary[300]"),
          disabled: theme("colors.primary[400]"),
        },
      }),
      stroke: ({ theme }) => ({
        light: {
          DEFAULT: theme("colors.primary[900]"),
          medium: theme("colors.primary[700]"),
        },
        dark: {
          DEFAULT: theme("colors.white"),
          medium: theme("colors.primary[300]"),
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
