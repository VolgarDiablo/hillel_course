/** @type {import('tailwindcss').Config} */
const pseudo = require("tailwindcss-pseudo-elements");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "#f44336",
      },
      padding: {
        customPyHeader: "30px",
        customPxHeader: "40px",
      },
    },
  },
  plugins: [pseudo()],
  variants: {
    extend: {
      display: ["before", "after"],
      clear: ["after"],
    },
  },
};
