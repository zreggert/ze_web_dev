/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'teal': '#67CBA6',
      'white': '#ffffff',
      'gray': '#474748',
      'seafoam': '#80FDD5',
      'lightgray': '#6b7280',
      'slate300': '#cbd5e1',
      'skyblue': '#bae6fd',
      'black': '#000000'
    }
  },
  plugins: [],
}