/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{ // customize colors
        'pure-red': '#ff0000',
        'pure-blue' : '#00008B'
      }
    },
    fontFamily: {
      osworld: ['Oswald','sans-serif'],
      bebas: ['Bebas Neue','san-serifs']
    },
    fontSize: { // customize font size
      sm: '0.3rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

