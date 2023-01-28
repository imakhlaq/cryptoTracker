/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./src/assets/banner2.jpg')",
      },
    },
  },
  plugins: [],
};
