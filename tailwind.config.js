/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // Zola templates
    "./content/**/*.md",     // Markdown content files
    "./static/**/*.js",      // JavaScript files in the static folder
  ],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%': { color: 'red' },
          '10%': { color: 'orange' },
          '20%': { color: 'yellow' },
          '30%': { color: 'lime' },
          '40%': { color: 'green' },
          '50%': { color: 'cyan' },
          '60%': { color: 'blue' },
          '70%': { color: 'indigo' },
          '80%': { color: 'violet' },
          '90%': { color: 'magenta' },
          '100%': { color: 'red' },
        },
      },
      animation: {
        rainbow: 'rainbow 1s linear infinite',
      },
    },
  },
  plugins: [],
}
