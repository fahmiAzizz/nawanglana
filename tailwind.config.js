/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    'mobile': '450px'
  },
  extend: {
    fontFamily: {
      'customFont':['Satisfy', 'cursive']
    }
  },
  },
  plugins: [],
}