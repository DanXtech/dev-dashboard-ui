// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
