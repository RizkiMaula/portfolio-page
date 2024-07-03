/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#074173',
        secondary: '#1679AB',
        txtHover: '#C5FF95',
        txtPrimary: '#5DEBD7',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
