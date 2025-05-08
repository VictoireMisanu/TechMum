/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainPink': '#932B39',
        'primaryVioleteLight': '#9B59B6',
        'primaryVioleteDark': '#5B2C6F',
        'primaryVioleteDarker': '#4A235A',
        'primaryVioleteDarkest': '#3E1F4D',
        'primaryPink' : '#FF65C3',
        'primaryPinkLight' : '#FF8A00', 
      },
      backgroundImage: {
        'heroPattern': "url('/images/HeroSection.png')",
        'mainGradient': 'linear-gradient(to bottom right, #FF65C3,#FF8A00 )',
        'secondaryGradient': 'linear-gradient(to bottom right, #FF65C3, #3E1F4D)',
        
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}