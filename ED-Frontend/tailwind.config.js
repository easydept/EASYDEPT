/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#004d29',
      },
      fontFamily: {
        montserrat: "Montserrat"
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '130': '1.30',
      }
      
    },
  },
  plugins: [],
}

