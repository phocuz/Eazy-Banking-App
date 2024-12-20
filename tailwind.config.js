/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      sans:"Public Sans, sans-serif",
    },
    extend: {
      colors: {
        customDarkBlue: '#2d314d', 
      },
    },
  },
  plugins: [],
}

