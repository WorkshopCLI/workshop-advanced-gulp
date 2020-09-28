const themekit = require('@shopify/themekit');

const deploy = () => themekit.command('deploy', {
  ignoredFiles: ['config/settings_data.json']
});

module.exports = deploy;
