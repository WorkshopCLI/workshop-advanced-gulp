const del = require('del');
const rollup = require('@rollup/stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const {src, dest, series} = require('gulp');
const flatten = require('gulp-flatten');
const sourcemaps = require('gulp-sourcemaps');


const clean = () => {
  return del('dist/**/*');
};

const locales = () =>
  src('src/locales/**/*.json', { base: 'src' }).pipe(dest('dist'));

const buildConfig = () =>
  src('src/config/**/*.json', { base: 'src' }).pipe(dest('dist'));

const layouts = () =>
  src('src/layouts/**/*.liquid', { base: 'src' }).pipe(dest('dist'));

const templates = () =>
  src('src/templates/**/*.liquid', { base: 'src' }).pipe(dest('dist'));

const sections = () =>
  src('src/sections/**/*.liquid', { base: 'src' })
    .pipe(flatten({ includeParents: 1 }))
    .pipe(dest('dist'));

const snippets = () =>
  src('src/snippets/**/*.liquid', { base: 'src' })
    .pipe(flatten({ includeParents: 1 }))
    .pipe(dest('dist'));

let cache;
const scripts = () =>
  rollup({
    input: './src/scripts/index.js',
    plugins: [],
    sourcemap: true,
    cache: cache,
    output: {
      format: 'iife',
      sourcemap: true,
    },
    format: 'iife',
  })
    .on('bundle', (bundle) => (cache = bundle))
    .pipe(source('theme.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets'));

const liquid = series(
  clean,
  locales,
  buildConfig,
  layouts,
  templates,
  sections,
  snippets,
  scripts,
);

const build = series(liquid);

module.exports = {
  build,
};
