/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {


        colors: {
          dark: '#1b1b1b',
          light: '#f5f5f5',
  
          primary: '#abaadd',
          secondary: '#??',
  
          bblue: '#091734', // 240,86,199
          borange: '#B85100', // 80,230,217
  
          gwhite: '#f8f6f2',
          gbeige: '#E9DCC2',
          gred: '#d3202e',

          apink: '#dcb3dd', // 240,86,199
        },
      
    },
  },
  plugins: [],
}
