const { series } = require('gulp');

const build = require('./workflow/tasks/build');
const clean = require('./workflow/tasks/clean');
const deploy = require('./workflow/tasks/deploy');
const images = require('./workflow/tasks/images');
const open = require('./workflow/tasks/open');
const static = require('./workflow/tasks/static');
const svg = require('./workflow/tasks/svg');
const watcher = require('./workflow/tasks/watcher');

module.exports = {
  build: series(clean, build, svg, images, static),
  clean,
  deploy: series(clean, build, svg, images, static, deploy),
  images,
  open,
  start: series(clean, build, svg, images, static, deploy, open, watcher),
  static,
  svg,
  watch: series(open, watcher),
};
