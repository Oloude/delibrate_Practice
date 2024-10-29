/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        lightGray: '#EEF2F3',
        darkGray: '#484C51',
        mediumGrayBlue: '#8F939D',
        brightYellow: '#F3D74F',
        mutedLavender: '#7B737B'
      }
    },
  },
  plugins: [],
}