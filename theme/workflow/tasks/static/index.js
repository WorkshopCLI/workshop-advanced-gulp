const { src, dest } = require('gulp');

const static = () => src('src/static/**/*').pipe(dest('dist/assets'));

module.exports = static;
