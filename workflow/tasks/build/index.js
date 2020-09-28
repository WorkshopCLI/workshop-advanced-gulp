const { series } = require('gulp');

const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');

const build = series(liquid, scripts, styles);

module.exports = build;