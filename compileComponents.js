/* globals require, __dirname */
const babel = require('@babel/core');
const bundleMapping = require('./componentsList');
const path = require('path');
const fs = require('fs');

const component_array = [];
for (let component in bundleMapping) {
  component_array.push(component);
}
const import_array = [];
for (let component of component_array) {
  import_array.push(`${component}/${component}`);
}
const import_regex = new RegExp(` from '[.][.]/(${import_array.join('|')})';`);

for (let component in bundleMapping) {
  const filePath = path.join(__dirname, component, component + '.jsx');
  const destFilePath = path.join(__dirname, component, 'index.js');
  if (fs.existsSync(filePath)) {
    const raw_code = fs.readFileSync(filePath, 'utf8');

    // rewriting for example "import Icon from '../Icon/Icon';" to "import Icon from '../Icon';" (#874)
    const with_rewritten_imports = raw_code.replace(
      import_regex,
      substring =>
        `${substring.substring(0, (substring.length - 11) / 2 + 9)}';`
    );

    const transformedCode = babel.transform(with_rewritten_imports, {
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
    });

    fs.writeFileSync(destFilePath, transformedCode.code);
    console.log('Transpiled: ', destFilePath);
  }
}
