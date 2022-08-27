/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ["Dosis"],
      "special": ["Inter"]
    },
    extend: {
      colors: {
        "stroke-secondary": "#383B4C",
        "background-primary": "#181a23",
        "background-secondary": "#1e2230",
        "logo-primary": "#ff7878",
        "sidebar-background": "#141723",
        "red-highlight": "#D35050",
        "title-secondary": "#C3BFBF"
      },

    },

    
  },
  
  
  plugins: [],
}
