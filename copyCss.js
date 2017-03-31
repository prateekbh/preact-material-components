const cp = require('cp');
const path = require('path');

const srcPath = path.join(__dirname, 'node_module', '@material');
const bundleMapping = {
	Button: 'button',
	Card: 'card',
	Checkbox: 'checkbox',
	Dialog: 'dialog',
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
	const source = bundleMapping[dest];
	const sourcePath = path.join(srcPath, source, 'dist', '*.css');
	const destPath = path.join(__dirname, 'src', dest, '*.css');
	cp.sync(sourcePath, destPath);
}
