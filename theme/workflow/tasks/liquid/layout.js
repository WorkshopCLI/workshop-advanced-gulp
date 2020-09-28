const { src, dest } = require('gulp');

const layout = () =>
  src('src/liquid/layout/**/*.liquid', { base: 'src/liquid' }).pipe(dest('dist'));

module.exports = layout;
