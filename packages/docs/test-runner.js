const shelljs = require('shelljs');
console.log(shelljs.env);
console.log('=================');
const commitRange = `FETCH_HEAD..${shelljs.env['TRAVIS_BRANCH']}`;
console.log('git diff');
const list = shelljs.exec(`git --no-pager diff --name-only ${commitRange}`);

process.exit(1);
