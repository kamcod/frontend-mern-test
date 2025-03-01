/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#49C7AB',
        offWhite: '#F1F5F9'
      },
    },
  },
  plugins: [],
}
