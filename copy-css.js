/*globals require, __dirname*/
const cp = require('cp');
const path = require('path');

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
	Radio: 'radio',
	Select: 'select',
	Snackbar: 'snackbar',
	Switch: 'switch',
	Textfield: 'textfield',
	Toolbar: 'toolbar',
	Theme: 'theme',
	Typography: 'typography'
};

for (let dest in bundleMapping) {
	if (bundleMapping.hasOwnProperty(dest)) {
		const source = bundleMapping[dest];
		const sourcePath = path.join(srcPath, source, 'dist', 'mdc.' + source + '.css');
		const destPath = path.join(__dirname, 'Components', dest, dest + '.css');
		cp.sync(sourcePath, destPath);
	}
}
