const themekit = require('@shopify/themekit');

const themekitConfig = {
  ignoredFiles: ['config/settings_data.json'],
};

process.argv.forEach((arg) => {
  if (arg === '--allow-live') {
    themekitConfig.allowLive = true;
  }

  if (arg.indexOf('--env=') >= 0) {
    themekitConfig.env = arg.split('=')[1];
  }
});

const deploy = () => themekit.command('deploy', themekitConfig);

module.exports = deploy;
