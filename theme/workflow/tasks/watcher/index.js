const { parallel, series } = require('gulp');
const watch = require('gulp-watch');

const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');

const watchScripts = () => watch('src/scripts/**/*.js', [scripts]);
const watchStyles = () => watch('src/styles/**/*.scss', [styles]);

const watcher = async () => {
  watchScripts();
  watchStyles();
};

module.exports = watcher;
