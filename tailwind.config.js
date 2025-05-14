 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./dist/*.{html,css,js}"],
   theme: {
     extend: {
      colors: {
         white: "#ffffff",
         orange: "#CB8806",
         grayBlack: "#212121",
       },

     },
   },
   plugins: [],
 }