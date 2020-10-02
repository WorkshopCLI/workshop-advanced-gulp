const { series } = require('gulp');

const buildConfig = require('../../config/config');

const checkoutScripts = require('../checkout-scripts');
const checkoutStyles = require('../checkout-styles');
const liquid = require('../liquid');
const scripts = require('../scripts');
const styles = require('../styles');

const seriesItems = [
  liquid,
  scripts,
  styles,
];

if (buildConfig.shopifyPlus) {
  seriesItems.push(checkoutScripts);
  seriesItems.push(checkoutStyles);
}

const build = series(...seriesItems);

module.exports = build;