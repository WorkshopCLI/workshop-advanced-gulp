const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const dist = 'dist/snippets';

const svg = (path) =>
  src('src/svg/**/*')
    .pipe(rename((path) => {
      path.basename = `svg-${path.basename}`;
      path.extname = '.liquid';
    }))
    .pipe(changed(dist))
    .pipe(dest(dist));

module.exports = svg;
