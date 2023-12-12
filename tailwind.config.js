/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#A2A0D9'
      },
      colors: {
        'primary': '#A2A0D9',
        'secondary': '#8F92BF',
        'secondary-hover': '#6B6E9C',
        'tertiary': '#0D0E26',
        'quaternary': '#FFFFFF',
        'quaternary-hover': '#CACACA',
        'shape': "#FFFFFF",
      },
    },
  },
  plugins: [],
}

