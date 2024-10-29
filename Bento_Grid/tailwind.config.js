/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DM_Sans": ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        'purpleF' : '#dacffc',
        'purpleT' : '#7650dc',
        'yellowF' : '#f9eee1',
        'yellowT' : '#ffcb6b',
        'black' : '#121212',
      }
    },
  },
  plugins: [],
}