/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/water.png')"
      },
      colors: {
        'regal-blue': '#243c5a',
        'contev-ui' : '#ffffff',
      },
    },
    plugins: [],
  }
}