import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8860B",
          light: "#D4A017",
          bright: "#F5C518",
          pale: "#FDF6E3",
          dark: "#8B6508",
        },
        cream: {
          DEFAULT: "#FAFAF7",
          dark: "#F5F0E8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
