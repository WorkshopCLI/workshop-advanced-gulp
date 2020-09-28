const gulpShopify = require('gulp-shopify-upload');

const deploy = async () => {
  return gulpShopify(
    process.env.STORE_KEY,
    process.env.STORE_PASSWORD,
    process.env.STORE,
    process.env.STORE_THEME_ID
  )
};

module.exports = deploy;
