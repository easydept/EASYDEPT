/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#004d29',
      },
      fontFamily: {
        custom: "Montserrat"
      }
      
    },
  },
  plugins: [],
}

