/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'church-dark': '#334B55',  // Cor de fundo escura das imagens
        'church-orange': '#DDA675', // Cor dos botões
      }
    },
  },
  plugins: [],
}
