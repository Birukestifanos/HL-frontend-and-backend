
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#86efac',   // Light green
          'green-dark': '#22c55e',
          red: '#B91C1C',
          'red-dark': '#991B1B',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
