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
        primary: {
          50: "#E5E6EB",
          100: "#D9DAE3",
          200: "#BFC1CF",
          300: "#A5A7BB",
          400: "#8A8EA8",
          500: "#707494",
          600: "#5C5F7A",
          700: "#484B60",
          800: "#343646",
          900: "#21222C",
          950: "#181920",
        },
      },
      fontFamily: {
        sans: ["var(--font-quicksand)"],
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
          medium: theme("colors.primary[700]"),
          disabled: theme("colors.primary[600]"),
        },
        dark: {
          DEFAULT: theme("colors.white"),
          medium: theme("colors.primary[300]"),
          disabled: theme("colors.primary[400]"),
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
