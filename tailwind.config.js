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
      'customFont': ['Satisfy', 'cursive'],
      'customFont2': ['Sofia', 'cursive'],
      'customFont3': ['Lobster', 'sans-serif'],
    },
    backgroundImage: {
      'bingkai': "url('/src/assets/bingkai.png')"
    }
  },
  },
  plugins: [],
}