const shelljs = require('shelljs');
console.log(shelljs.env);
console.log('=================');
const head = shelljs.env['FETCH_HEAD'] || '2.0';
const commitRange = `${head}..${shelljs.env['TRAVIS_BRANCH']}`;
const packageRegexp = /packages\/([a-z]*)\/.*/;
const list = shelljs.exec(`git --no-pager diff --name-only ${commitRange}`);
const packagesChanged = list
  .filter(file => file.match(packageRegexp))
  .map(pckg => pckg.match(packageRegexp)[1]);

process.exit(1);
