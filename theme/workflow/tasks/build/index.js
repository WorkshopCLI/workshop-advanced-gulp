const { series } = require('gulp');

const buildConfig = require('../../../build.config');

const checkoutScripts = require('../scripts/checkout');
const checkoutStyles = require('../checkout-styles');
const liquid = require('../liquid');
const scripts = require('../scripts/theme');
const styles = require('../styles');

const seriesItems = [liquid, scripts, styles];

if (buildConfig.shopifyPlus) {
  seriesItems.push(checkoutScripts);
  seriesItems.push(checkoutStyles);
}

const build = series(...seriesItems);

module.exports = build;
