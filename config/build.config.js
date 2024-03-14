const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  name: 'build',
  output: {
    clean: true,
    path: path.join(path.resolve(), 'docs'),
  },
});
