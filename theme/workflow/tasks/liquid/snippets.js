const { src, dest } = require('gulp');
const flatten = require('gulp-flatten');

const snippets = () =>
  src('src/liquid/snippets/**/*.liquid', { base: 'src' })
    .pipe(flatten({ includeParents: 1 }))
    .pipe(dest('dist'));

module.exports = snippets;
