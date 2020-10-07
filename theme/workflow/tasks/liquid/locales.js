const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const dist = 'dist';

const locales = () =>
  src('src/liquid/locales/**/*.json', { base: 'src/liquid' })
    .pipe(changed(dist))
    .pipe(dest(dist));

module.exports = locales;
