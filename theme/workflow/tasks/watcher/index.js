const { series, watch } = require('gulp');
// const watch = require('gulp-watch');
const themekit = require('@shopify/themekit');

const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');
const deploy = require('../deploy');

const watchLiquid = () => watch('src/liquid/**/*', series([liquid]));
const watchScripts = () => watch('src/scripts/**/*.js', series([scripts]));
const watchStyles = () => watch('src/styles/**/*.scss', series([styles]));
const watchDist = () => themekit.command('watch', {
  ignoredFiles: ['config/settings_data.json']
});

const watcher = async () => {
  watchLiquid();
  watchScripts();
  watchStyles();
  watchDist();
};

module.exports = watcher;
