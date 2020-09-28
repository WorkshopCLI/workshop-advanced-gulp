const del = require('del');

const clean = async () => await del('dist/*');

module.exports = clean;
