const { series, watch } = require('gulp');
const themekit = require('@shopify/themekit');

const checkoutScripts = require('../scripts/checkout');
const checkoutStyles = require('../checkout-styles');
const images = require('../images');
const liquidConfig = require('../liquid/config');
const liquidLayout = require('../liquid/layout');
const liquidLocales = require('../liquid/locales');
const liquidSections = require('../liquid/sections');
const liquidSnippets = require('../liquid/snippets');
const liquidTemplates = require('../liquid/templates');
const scripts = require('../scripts/theme');
const static = require('../static');
const styles = require('../styles');
const svg = require('../svg');
const buildConfig = require('../../../build.config');

const scriptSeries = [scripts];
const stylesSeries = [styles];

if (buildConfig.shopifyPlus) {
  scriptSeries.push(checkoutScripts);
  stylesSeries.push(checkoutStyles);
}

const watcher = async () => {
  watch('src/images/**/*', series([images]));
  watch('src/liquid/config/**/*.json', series([liquidConfig]));
  watch('src/liquid/layout/**/*.liquid', series([liquidLayout]));
  watch('src/liquid/locales/**/*.json', series([liquidLocales]));
  watch('src/liquid/sections/**/*.liquid', series([liquidSections]));
  watch('src/liquid/snippets/**/*.liquid', series([liquidSnippets]));
  watch('src/liquid/templates/**/*.liquid', series([liquidTemplates]));
  watch('src/scripts/**/*.js', series(scriptSeries));
  watch('src/static/**/*', series([static]));
  watch('src/styles/**/*.scss', series(stylesSeries));
  watch('src/svg/**/*', series([svg]));

  themekit.command('watch', {
    ignoredFiles: ['config/settings_data.json'],
  });
};

module.exports = watcher;
