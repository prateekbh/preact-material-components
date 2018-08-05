/* globals module, require, __dirname */
const CssMigrationWebpackPlugin = require('./CssMigrationWebpackPlugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    preact: 'preact'
  },
  plugins: [new CssMigrationWebpackPlugin()]
};
