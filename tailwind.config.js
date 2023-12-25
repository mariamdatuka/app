/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#0F0F0F",
      mainGray: "#4F4F4F",
      main: "#776e93",
      sec:"#4f4762",
      hover:"#4c445a",
      mainBg:'#f3edf2', 
      red: "#ff0101",
      mainText: "rgb(15, 23, 36)",
      white:"#FFF",
      lightbg:'#fbf5fa',
    },
    extend: {},
    plugins: [],
  },
};
