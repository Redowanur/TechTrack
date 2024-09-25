/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ['New Amsterdam', 'sans-serif'],
      },
      boxShadow: {
        'all': '1px 2px 5px 1px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}