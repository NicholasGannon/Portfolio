/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        clashGrotesk: ["Clash Grotesk", "sans-serif"],
      },
      colors: {
        "primary": "#D7FF82",
      },
      spacing: {
        "desktop": "1360px",
        "shape": "40rem",
      },
      animation: {
        blob: "blob 7s infinite",
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(520px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-120px, 0px) scale(1)",
          },
          "100%": {
            transform: "translate(520px, 0px) scale(1)",
          },
        },
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
      },
    },
  },
  plugins: [],
}

