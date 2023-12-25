/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar' : '#333333',
        'btn' : '#00B207',
        'calculate' : "#F2F2F2",
        'item' : '#808080'
      }
    },
  },
  plugins: [],
}

