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
      'lightGreen': 'D5F2E3',
      'orange': 'orange',
      'dark': '01110A'
    },
    extend: {},
  },
  plugins: [],
}
