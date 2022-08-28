/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#c026d3",
        dark: "#0f172a",
        secondary: "#475569",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
