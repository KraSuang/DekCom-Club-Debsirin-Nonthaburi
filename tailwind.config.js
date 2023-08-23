/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
            home: {
                DEFAULT : '#1B110D',
            },
            preview: {
                DEFAULT: "#312825"
            }
        }
      },
      fontFamily:{
        'kanit': ['Kanit', 'sans-serif'],
        'oswald': ['Oswald', 'sans-selif']
      },
      backgroundImage: {
        'game': "url('./asset/image/game.jpg')",
        'multimedia': "url('./asset/image/multimedia.jpg')",
        'program': "url('./asset/image/program.png')",
        'graphic': "url('./asset/image/Graphic.jpg')",
        'robot': "url('./asset/image/Robot.jpg')",
        'thumbnail': "url('./asset/image/Club_Banner.png')",
        'thumbnail2': "url('./asset/image/BG-1.png')",
      }
    },
  },
  plugins: [],
}

