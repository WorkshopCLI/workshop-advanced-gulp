const { src, dest } = require('gulp');

const config = () =>
  src('src/liquid/config/**/*.json', { base: 'src/liquid' }).pipe(dest('dist'));

module.exports = config;
