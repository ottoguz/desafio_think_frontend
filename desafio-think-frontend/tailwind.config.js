/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      width: '90vw',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

