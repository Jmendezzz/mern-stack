/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        principal: "#2cb1bc",
        input_form: "#f8fafc",
        input_border: "#cbd5e1"
      },
      screens:{
        'tall':{'raw':'(min-height: 800px)'}
      }
    },
  },
  plugins: [],
}

