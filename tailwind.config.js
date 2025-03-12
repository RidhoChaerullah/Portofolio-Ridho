/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#0ea5e9',
        'secondary': '#172554',
        'pucet': '#64748b',
      },
      screens: {
        'xl': '1280px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

