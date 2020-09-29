const { series, watch } = require('gulp');
const themekit = require('@shopify/themekit');

const images = require('../images');
const liquid = require('../liquid');
const scripts = require('../scripts');
const static = require('../static');
const styles = require('../styles');
const svg = require('../svg');

const watchImages = () => watch('src/images/**/*', series([images]));
const watchLiquid = () => watch('src/liquid/**/*', series([liquid]));
const watchScripts = () => watch('src/scripts/**/*.js', series([scripts]));
const watchStatic = () => watch('src/static/**/*', series([static]));
const watchStyles = () => watch('src/styles/**/*.scss', series([styles]));
const watchSvg = () => watch('src/svg/**/*', series([svg]));
const watchDist = () => themekit.command('watch', {
  ignoredFiles: ['config/settings_data.json']
});

const watcher = async () => {
  watchImages();
  watchLiquid();
  watchScripts();
  watchStatic();
  watchStyles();
  watchSvg();
  watchDist();
};

module.exports = watcher;
