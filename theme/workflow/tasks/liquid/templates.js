const { src, dest } = require('gulp');

const templates = () =>
  src('src/liquid/templates/**/*.liquid', { base: 'src' }).pipe(dest('dist'));

module.exports = templates;
