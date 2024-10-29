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
        "Ubuntu": ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "marineBlue" : "#02295a",
        "purpleBlue" : "#473dff",
        "pastelBlue" : "#adbeff",
        "lightBlue" : "#bfe2fd",
        "strawberryRed" : "#ed3548",
        "coolGray" : "#9699ab",
        "lightGray" : "#d6d9e6",
        "magnolia" : "#f0f6ff",
        "alabaster" : "#fafbff",
      },
      backgroundImage : {
        "desktop" : "url('./src/assets/bg-sidebar-desktop.svg')",
        "mobile" : "url('./src/assets/bg-sidebar-mobile.svg')"
      }
    },
  },
  plugins: [],
}