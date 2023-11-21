/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#040303',
        'secondary': '#CFA456',
        'card-bg': '#161515'
      },
      fontFamily: {
        'arya': ['Arya', 'sans-serif']
      }
    },
  },
  plugins: [],
}

