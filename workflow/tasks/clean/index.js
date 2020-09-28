const del = require('del');

const clean = () => {
  return del('dist/**/*');
};

module.exports = clean;
