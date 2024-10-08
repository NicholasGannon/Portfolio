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
        "secondary": "#404040",
        "tertiary": "#675944",
      },
      animation: {
        'open-menu': 'open-menu 0.8s ease-in-out forwards',
        'close-menu': 'close-menu 0.8s ease-in-out forwards',
      },
      keyframes: {
        'open-menu': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          }
        },
        'close-menu': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          }
        },
      },
    },
  },
  plugins: [],
}