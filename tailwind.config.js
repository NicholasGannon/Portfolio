/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        "primary": "#FFF8EE",
        "accent": "#DACDBB",
        "secondary": "#2590F3", 
      },
    },
  },
  plugins: [],
}