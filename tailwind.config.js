/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/output.css", // Output from 'npm run build:css'
    "./index.html",
    "./listings/index.html",
    "./listing/edit/index.html",
    "./listing/index.html",
    "./profile/login/index.html",
    "./profilePage/index.html",
    "./profile/register/index.html",
    "./js/**/*.mjs"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
