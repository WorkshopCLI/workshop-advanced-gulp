const { src, dest } = require('gulp');

const locales = () =>
  src('src/locales/**/*.json', { base: 'src' }).pipe(dest('dist'));

module.exports = locales;
