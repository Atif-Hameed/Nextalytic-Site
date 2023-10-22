/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope:'Manrope',
        inter:'Inter',
        marcelous:'Marcellus',
        raleway:'Raleway'
      },
      boxShadow: {
        'cardShadow': '2px 4px 20px 0px rgba(198, 194, 191, 0.38)',
        'techShadow':'0px 8px 8px 0px #00000008'
      },
    },
  },
  plugins: [],
}