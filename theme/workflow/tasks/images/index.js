const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const dist = 'dist/assets';

const images = () =>
  src('src/images/**/*')
    .pipe(changed(dist))
    .pipe(dest(dist));

module.exports = images;
