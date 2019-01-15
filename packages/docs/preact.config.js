const path = require('path');

export default config => {
  const paths = [
    path.resolve(__dirname, '..', 'drawer', 'node_modules'),
    path.resolve(__dirname, '..', 'checkbox', 'node_modules'),
    path.resolve(__dirname, '..', 'tab', 'node_modules'),
    path.resolve(__dirname, '..', 'textfield', 'node_modules'),

  ];
  config.module.rules[2].use[0].options.options.includePaths.push(
    ...paths
  );
  return config;
}