/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // Zola templates
    "./content/**/*.md",     // Markdown content files
    "./static/**/*.js",      // JavaScript files in the static folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
