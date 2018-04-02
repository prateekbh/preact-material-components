/* globals module, require, __dirname */
const webpack = require('webpack');
const CssMigrationWebpackPlugin = require('./CssMigrationWebpackPlugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/proptypes|scripts\/sw.js/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true
                }
              }
            ]
          ],
          plugins: [
            ['transform-react-jsx', {pragma: 'h'}],
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      }
    ]
  },
  plugins: [
    new CssMigrationWebpackPlugin(),
    new WebpackShellPlugin({
      onBuildStart: ['node ./compileComponents.js']
    })
  ]
};
