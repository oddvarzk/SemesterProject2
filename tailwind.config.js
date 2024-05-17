/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/output.css", // Output from 'npm run build:css'
    "./index.html",
    "./auctionPage/index.html",
    "./biddingPage/index.html",
    "./loginPage/index.html",
    "./profilePage/index.html",
    "./registerPage/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
