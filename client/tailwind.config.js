/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2B8CFF",
        "secondary": "#695D5D",
      },

      fontFamily: {
        "lato": ["Lato-Regular"],
        "latobold": ["Lato-Bold"]
      }
    },
  },
  plugins: [],
}


