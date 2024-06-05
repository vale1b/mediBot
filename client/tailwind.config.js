/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'container': '#C7D8d9',
        'primary': '#3D5A98',
        'secondary': '#0b0064',
        'violeta': '#96B7FF',
        'celeste': '#DBEAFE'

      }
    },
  },
  plugins: [],
}
