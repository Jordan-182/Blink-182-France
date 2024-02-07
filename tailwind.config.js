/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-rerif'],
      },
      backgroundImage: {
        'bgimg': "url('./background.jpg')",
    },
  }
  },
  plugins: [],
};
