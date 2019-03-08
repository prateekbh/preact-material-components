const shelljs = require('shelljs');
console.log(shelljs.env);
console.log('=================');
const head = shelljs.env['FETCH_HEAD'] || '2.0';
const commitRange = `${head}..${shelljs.env['TRAVIS_BRANCH']}`;
if (shelljs.env['TRAVIS_PULL_REQUEST'] === 'false') {
  // run all tests
  shelljs.exec('cypress run');
} else {
  const packageRegexp = /packages\/([a-z]*)\/.*/;
  console.log(`cmd: git --no-pager diff --name-only ${commitRange}`);
  const list = shelljs.exec(`git --no-pager diff --name-only ${commitRange}`);
  console.log(list);
  const packagesChanged = list
    .filter(file => file.match(packageRegexp))
    .map(pckg => pckg.match(packageRegexp)[1]);
}

process.exit(1);
