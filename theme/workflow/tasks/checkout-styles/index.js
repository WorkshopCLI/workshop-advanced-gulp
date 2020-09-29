const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

const styles = () =>
  src('src/styles/checkout.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('checkout.css'))
    .pipe(dest('dist/assets/'));

module.exports = styles;
