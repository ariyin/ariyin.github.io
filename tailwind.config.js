/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        "max-lg": { max: "800px" },
        "max-xl": { max: "1200px" },
        "max-2xl": { max: "1500px" },
      },
    },
    fontFamily: {
      fakt: ["Fakt Soft", "sans-serif"],
    },
  },
};
