/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    //Меняю контрольные точки в медиа запросах с min на max и присваиваю значения
    screens: {
      'lg':'1150px',
      's': {'max': '440px'},
   }
  },
  plugins: [],
}
}
