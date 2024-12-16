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
              '16.7%': { color: 'orange' },
              '33.4%': { color: 'yellow' },
              '50%': { color: 'green' },
              '66.7%': { color: 'blue' },
              '83.4%': { color: 'indigo' },
              '100%': { color: 'violet' },
            },
          },
          animation: {
            rainbow: 'rainbow 1s linear infinite',
          },
        },
  },
  plugins: [],
}
