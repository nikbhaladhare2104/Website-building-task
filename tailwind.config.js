/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#605BFF",
        secondary : "#ff004f",
      },
      backgroundImage: {
        'hero': "url('src/assets/hero.png')",
        'hero1': "url('src/assets/hero1.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}