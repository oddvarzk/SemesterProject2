/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './styles/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ["Playfair+Display", "serif"],
        'serifFour': ["Source+Serif+4", "serif"],
      }
    },
  },
  plugins: [],
};
