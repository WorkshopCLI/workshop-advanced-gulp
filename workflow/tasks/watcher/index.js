const { parallel, watch, series } = require('gulp');

const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');

const watchScripts = () => watch('src/scripts/**/*.js', [scripts]);
const watchStyles = () => watch('src/styles/**/*.scss', [styles]);

const watcher = async () => parallel(watchScripts, watchStyles);

module.exports = watcher;
