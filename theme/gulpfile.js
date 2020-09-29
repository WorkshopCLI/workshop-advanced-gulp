const { series } = require('gulp');

const build = require('./workflow/tasks/build');
const clean = require('./workflow/tasks/clean');
const deploy = require('./workflow/tasks/deploy');
const images = require('./workflow/tasks/images');
const open = require('./workflow/tasks/open');
const watcher = require('./workflow/tasks/watcher');

module.exports = {
  build: series(clean, build, images),
  clean,
  deploy: series(clean, build, images, deploy),
  images,
  open,
  start: series(clean, build, images, deploy, open, watcher),
  watch: series(open, watcher),
};
