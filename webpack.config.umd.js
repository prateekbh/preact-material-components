/* globals module, require, __dirname */
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/proptypes|scripts\/sw.js/,
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      comments: true,
      mangle: false
    })
  ]
};
