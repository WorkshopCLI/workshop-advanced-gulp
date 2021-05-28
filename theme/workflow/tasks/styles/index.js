const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const prefixerOptions = {
  cascade: false,
};

sass.compiler = require('node-sass');

const styles = () => src('src/styles/theme.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(autoprefixer(prefixerOptions))
  .pipe(sourcemaps.write())
  .pipe(rename('theme.css'))
  .pipe(dest('dist/assets/'));

module.exports = styles;
