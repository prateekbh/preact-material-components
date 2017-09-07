const webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
   app: './app.jsx',
   vendor: ['preact']
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/public/js/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/proptypes|scripts\/sw.js/,
        options: {
          presets: [['es2015', {"modules": false}]],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }]
          ]
        }
      }
	]
  },
  plugins: [
      new CleanWebpackPlugin('./public')
  ]
};

module.exports = config;