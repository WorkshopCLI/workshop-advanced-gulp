const { src, dest } = require('gulp');

const images = () =>
  src('src/images/**/*').pipe(dest('dist/assets'));

module.exports = images;
