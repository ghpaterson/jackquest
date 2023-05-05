/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Neue"],
        nasa: ["nasa"],
      },
      colors: {
        spaceDark: "#2A2F4F",
        spacePurple: "#917FB3",
        spaceLilac: "#E5BEEC",
        spaceLight: "#FDE2F3",
        spaceRed: "#DB5461",
        spaceGreen: "#94C9A9",
        spaceYellow: "#EC9F05",
      },
    },
  },
  plugins: [],
};
