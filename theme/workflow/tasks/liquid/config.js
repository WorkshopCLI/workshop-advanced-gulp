const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const dist = 'dist';

const config = () =>
  src('src/liquid/config/**/*.json', { base: 'src/liquid' })
    .pipe(changed(dist))
    .pipe(dest(dist));

module.exports = config;
