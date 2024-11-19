/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customNavLink: "#707C87",
      },
      container: {
        padding: "1rem",
        center: true,
      },
      screens: {
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
