const { src, dest } = require('gulp');
const flatten = require('gulp-flatten');
const changed = require('gulp-changed');
const dist = 'dist';

const sections = () =>
  src('src/liquid/sections/**/*.liquid', { base: 'src/liquid' })
    .pipe(flatten({ includeParents: 1 }))
    .pipe(changed(dist))
    .pipe(dest(dist));

module.exports = sections;
