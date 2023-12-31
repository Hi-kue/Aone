/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: [
    './views/**/*.ejs',
    './public/**/*.html',
    './routes/*',
  ],
  theme: {
    extend: { }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
});