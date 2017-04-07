/* globals require, __dirname, module */
const webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('[name].css');

const config = {
	entry: {
	 app: './app.js',
	 vendor: ['preact']
	},
	output: {
		path: __dirname + '/public',
		publicPath: '/public/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				options: {
					presets: [['es2015', {"modules": false}]],
					plugins:[
						["transform-react-jsx", { "pragma": "h" }]
					]
				}
			},
			{
				test: /\.css$/,
				loader: extractCSS.extract({
					fallbackLoader: 'style-loader',
					loader: ['css-loader','postcss-loader']
				}),
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin('./public'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: 2
		}),
		extractCSS
	]
};

module.exports = config;