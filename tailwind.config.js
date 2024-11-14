/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    screens: {
      'lg':'1150px',
   }
  },
  plugins: [],
}
}
