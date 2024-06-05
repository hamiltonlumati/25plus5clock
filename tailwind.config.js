/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/layout/screen.tsx"
  ],
  theme: {
    colors: {
      'darkGreen': '#003E1F',
      'lightGreen': '#D5F2E3',
      'orange': '#BA2D0B',
      'dark': '#01110A'
    },
    extend: {},
  },
  corePlugins: {
    visibility: false,
  },
  plugins: [],
}