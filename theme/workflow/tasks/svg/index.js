const { src, dest } = require('gulp');
const rename = require('gulp-rename');

const svg = (path) =>
  src('src/svg/**/*')
    .pipe(rename((path) => {
      path.basename = `svg-${path.basename}`;
      path.extname = '.liquid';
    }))
    .pipe(dest('dist/snippets'));

module.exports = svg;
