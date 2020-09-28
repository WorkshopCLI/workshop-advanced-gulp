const { src, dest } = require('gulp');

const locales = () =>
  src('src/liquid/locales/**/*.json', { base: 'src/liquid' }).pipe(dest('dist'));

module.exports = locales;
