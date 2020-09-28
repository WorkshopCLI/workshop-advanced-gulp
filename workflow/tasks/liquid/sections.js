const { src, dest } = require('gulp');
const flatten = require('gulp-flatten');

const sections = () =>
  src('src/sections/**/*.liquid', { base: 'src' })
    .pipe(flatten({ includeParents: 1 }))
    .pipe(dest('dist'));

module.exports = sections;
