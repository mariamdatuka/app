/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#0F0F0F",
      mainGray: "#4F4F4F",
      mainPurple: "#8d62d5",
      red: "#ff0101",
      mainbg: "rgb(15, 23, 36)",
    },
    extend: {},
    plugins: [],
  },
};
