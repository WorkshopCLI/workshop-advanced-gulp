const { series } = require('gulp');

const config = require('./config');
const layout = require('./layout');
const locales = require('./locales');
const sections = require('./sections');
const snippets = require('./snippets');
const templates = require('./templates');

const liquid = series(
  locales,
  config,
  layout,
  templates,
  sections,
  snippets
);

module.exports = liquid;
