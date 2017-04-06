/*globals require, __dirname, module*/

const cp = require('cp');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const srcPath = path.join(__dirname, 'node_modules', '@material');

const bundleMapping = {
	Button: 'button',
	Card: 'card',
	Checkbox: 'checkbox',
	Dialog: 'dialog',
	Drawer: 'drawer',
	Elevation: 'elevation',
	Fab: 'fab',
	FormField: 'form-field',
	Icon: 'icon-toggle',
	IconToggle: 'icon-toggle',
	List: 'list',
	Menu: 'menu',
	Radio: 'radio',
	Select: 'select',
	Snackbar: 'snackbar',
	Switch: 'switch',
	Textfield: 'textfield',
	Toolbar: 'toolbar',
	Theme: 'theme',
	Typography: 'typography'
};

class CssMigrationWebpackPlugin{
	copySuperCss() {
		const sourcePath = path.join(__dirname, 'node_modules', 'material-components-web', 'dist', 'material-components-web.css');
		const destFilePath = path.join(__dirname, 'style.css');

		//delete already existing file
		if (fs.existsSync(destFilePath)) {
			fs.unlinkSync(destFilePath);
		}

		cp.sync(sourcePath, destFilePath);
	}
	apply(compiler){
		compiler.plugin('after-emit', (compilation, callback) => {
			for (let dest in bundleMapping) {
				if (bundleMapping.hasOwnProperty(dest)) {
					const source = bundleMapping[dest];
					const sourcePath = path.join(srcPath, source, 'dist', 'mdc.' + source + '.css');
					const destFolderPath = path.join(__dirname, dest);
					try {
						//create folder if not already present
						if (!fs.existsSync(destFolderPath)) {
							mkdirp(destFolderPath);
						}
						const destFilePath = path.join(destFolderPath, 'style.css');
						//delete already existing file
						if (fs.existsSync(destFilePath)) {
							fs.unlinkSync(destFilePath);
						}
						//copy new file
						cp.sync(sourcePath, destFilePath);
					} catch (err) {
						return callback(err);
					}
				}
			}
			this.copySuperCss();
			callback();
		});
	}
}

module.exports = CssMigrationWebpackPlugin;