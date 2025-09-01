/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        body: '18px',
        head: '28px',
        subhead: '18px',
        sup: '10px',

      },
      colors: {
        black: '#0B0C10',
        darkgrey: '#1F2833',
        whitegrey: '#C5C6C7',
        neonblue: '#66FCF1',
        greenblue: '#45A29E',
        pink: '#D83f87',
        violet: '#44318D',
      },
      fontFamily: {
        'collegefont' : ['collegefont', 'sans-serif'],
        'timerfont' : ['timerfont', 'sans-serif'],
        'aboutfont': ['aboutfont', 'sans-serif'],
        'faqfont' :['faqfont' , 'sans-serif'] ,
        'otherfont' : ['otherfont', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin-reverse 10s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },

  plugins: [],
}
