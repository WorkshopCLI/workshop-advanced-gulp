const { src, dest } = require('gulp');
const flatten = require('gulp-flatten');

const sections = () =>
  src('src/liquid/sections/**/*.liquid', { base: 'src/liquid' })
    .pipe(flatten({ includeParents: 1 }))
    .pipe(dest('dist'));

module.exports = sections;
