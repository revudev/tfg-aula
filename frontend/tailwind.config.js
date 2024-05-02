/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          50: "#f2f5ff",
          100: "#e8ecff",
          200: "#d3dbff",
          300: "#b0bbff",
          400: "#8491ff",
          500: "#525bff",
          600: "#312ff8",
          700: "#241de4",
          800: "#1f19cc",
          900: "#1a159d",
          950: "#0b0c6a",
        },
      },
      fontFamily: {
        voll: ["Vollkorn", "sans-serif"],
        poiret: ["Poiret One", "sans-serif"],
        sed: ["Sedgwick Ave Display", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        slabo: ["Slabo", "sans-serif"],
      },
    },
  },
};
