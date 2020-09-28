const { src, dest } = require('gulp');

const config = () =>
  src('src/config/**/*.json', { base: 'src' }).pipe(dest('dist'));

module.exports = config;
