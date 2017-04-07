/* globals require, __dirname */
const babel = require('babel-core');
const bundleMapping = require('./componentsList');
const path = require('path');
const fs = require('fs');

for (let component in bundleMapping) {
	const filePath = path.join(__dirname, component, component+'.jsx');
	const destFilePath = path.join(__dirname, component, 'index.js');
	if (fs.existsSync(filePath)) {
		const transformedCode = babel.transformFileSync(filePath, {
			plugins:[
				["transform-react-jsx", { "pragma": "h" }],
				"transform-object-rest-spread"
			]
		});
		fs.writeFileSync(destFilePath, transformedCode.code);
	}
}