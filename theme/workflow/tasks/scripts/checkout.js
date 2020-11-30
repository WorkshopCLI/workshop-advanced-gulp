const buildConfig = require('../../../build.config');

const rollup = require('@rollup/stream');
const resolve = require('@rollup/plugin-node-resolve').nodeResolve;
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const { dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

const plugins = [resolve()];

let cache;

if (buildConfig.babel) {
  const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
  plugins.push(
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      allowAllFormats: true,
    })
  );
}

const scripts = () =>
  rollup({
    input: './src/scripts/checkout.js',
    plugins: plugins,
    cache: cache,
    output: {
      format: 'iife',
      sourcemap: true,
    },
  })
    .on('bundle', (bundle) => (cache = bundle))
    .pipe(source('checkout.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets'));

module.exports = scripts;
