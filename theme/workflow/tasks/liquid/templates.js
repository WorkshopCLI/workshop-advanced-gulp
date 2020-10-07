const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const dist = 'dist';

const templates = () =>
  src('src/liquid/templates/**/*.liquid', { base: 'src/liquid' })
    .pipe(changed(dist))
    .pipe(dest(dist));

module.exports = templates;
