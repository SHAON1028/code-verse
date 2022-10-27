/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin'),
  require('@tailwindcss/forms'),],
  

  
}