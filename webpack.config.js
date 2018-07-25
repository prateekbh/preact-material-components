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
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/proptypes|scripts\/sw.js/,
        options: {
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
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
  plugins: [new CssMigrationWebpackPlugin()]
};
