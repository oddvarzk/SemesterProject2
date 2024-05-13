const module = ('module');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './auctionPage/index.html',
    './biddingPage/index.html',
    './loginPage/index.html',
    './profilePage/index.html',
    './registerPage/index.html'
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
