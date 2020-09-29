const { series, watch } = require('gulp');
const themekit = require('@shopify/themekit');

const images = require('../images');
const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');

const watchImages = () => watch('src/images/**/*', series([images]));
const watchLiquid = () => watch('src/liquid/**/*', series([liquid]));
const watchScripts = () => watch('src/scripts/**/*.js', series([scripts]));
const watchStyles = () => watch('src/styles/**/*.scss', series([styles]));
const watchDist = () => themekit.command('watch', {
  ignoredFiles: ['config/settings_data.json']
});

const watcher = async () => {
  watchImages();
  watchLiquid();
  watchScripts();
  watchStyles();
  watchDist();
};

module.exports = watcher;
