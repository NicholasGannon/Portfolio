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
      animation: {
        'open-menu': 'open-menu 0.8s ease-in-out forwards',
        'close-menu': 'close-menu 0.8s ease-in-out forwards',
      },
      keyframes: {
        'open-menu': {
          '0%': {
            transform: 'scaleY(0)',
          },
          '80%': {
            transform: 'scaleY(1)',
          },
          '100%': {
            transform: 'scaleY(1)',
          }
        },
        'close-menu': {
          '0%': {
            transform: 'scaleX(1)',
          },
          '100%': {
            transform: 'scaleX(0)',
          }
        },
      },
    },
  },
  plugins: [],
}