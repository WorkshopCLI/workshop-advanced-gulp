const rollup = require('@rollup/stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const { dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

let cache;
const scripts = () =>
  rollup({
    input: './src/scripts/checkout.js',
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
    .pipe(source('checkout.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets'));

module.exports = scripts;
