const { series } = require('gulp');

const checkoutScripts = require('../checkout-scripts');
const checkoutStyles = require('../checkout-styles');
const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');

const build = series(liquid, scripts, styles, checkoutScripts, checkoutStyles);

module.exports = build;