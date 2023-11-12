/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: { 
    keyframes:{
      move:{
        '0%':{ transform:'translateX(0)'},
        '100%':{ transform:'translateX(10px)'},
      },
    },
    animation:{
      move:'move 1s ease-in-out infinite'
    }
    }
  },
  darkMode: "className",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}