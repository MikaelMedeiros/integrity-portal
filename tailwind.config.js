/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  theme: {
    theme: {
      extend: {
        colors: {
          surface: {
            500: '#8854d0'
          }
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}
