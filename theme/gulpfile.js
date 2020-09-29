const { series } = require('gulp');

const build = require('./workflow/tasks/build');
const clean = require('./workflow/tasks/clean');
const deploy = require('./workflow/tasks/deploy');
const open = require('./workflow/tasks/open');
const watcher = require('./workflow/tasks/watcher');

module.exports = {
  build: series(clean, build),
  clean,
  deploy: series(clean, build, deploy),
  open,
  start: series(clean, build, deploy, open, watcher),
  watch: series(open, watcher),
};
