/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Bricolage: ["Bricolage Grotesque", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"],
      },
      colors: {
        "primary": "#F3E8D9",
      },
      animation: {
        'open-menu': 'open-menu 0.8s ease-in-out forwards',
        'close-menu': 'close-menu 0.8s ease-in-out forwards',
      },
      keyframes: {
        'scroll': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          }
        },
      },
    },
  },
  plugins: [],
}