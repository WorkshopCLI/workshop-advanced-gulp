require('dotenv').config();

const { series } = require('gulp');

const build = require('./workflow/tasks/build');
const clean = require('./workflow/tasks/clean');
const deploy = require('./workflow/tasks/deploy');
const watcher = require('./workflow/tasks/watcher');

module.exports = {
  build: series(clean, build),
  clean,
  deploy: series(clean, build, deploy),
  start: series(clean, build, deploy, watcher),
  watch: watcher,
};
