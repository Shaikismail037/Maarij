/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        default:'15px',
      },
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    fontFamily:{
      primary:"Montserrat",
      secondary:"Palanquin",
    },
    backgroundImage: {
      'hero-img': "url('./assets/hero/bg.jpg')",
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#292F36',
          hover:'#363e4a'
        },
        secondary:"#4d5053",
        accent:{
          DEFAULT:'#cda274',
          secondary:'#f4f0ec',
          hover:'#b88c5d'
        },
      },
    },
  },
  plugins: [],
}