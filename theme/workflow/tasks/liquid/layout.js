const { src, dest } = require('gulp');
const buildConfig = require('../../config/config');

const path = 'src/liquid/layout/';

const srcOptions = {
  base: 'src/liquid',
};

if (!buildConfig.shopifyPlus) {
  srcOptions.ignore = `${path}checkout.liquid`;
}

const layout = () =>
  src(`${path}**/*.liquid`, srcOptions).pipe(dest('dist'));

module.exports = layout;
