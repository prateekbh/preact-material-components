/* globals module, require */
const webpack = require('webpack');
module.exports = {
	entry : './Components/index.js',
	output : {
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
					presets: [['es2015', {"modules": false}]],
					plugins:[
						["transform-react-jsx", { "pragma": "h" }],
						"transform-async-to-generator",
					],
				}
			}
		]
	}
};