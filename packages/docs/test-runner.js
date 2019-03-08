const shelljs = require('shelljs');
console.log(shelljs.env);
console.log(shelljs.env['TRAVIS_PULL_REQUEST']);
if (shelljs.env['TRAVIS_PULL_REQUEST'] != 'false') {
  const commitRange = `FETCH_HEAD..${shelljs.env['TRAVIS_BRANCH']}`;
  console.log('git diff');
  console.log(shelljs.exec(`git --no-pager diff --name-only ${commitRange}`));
}

process.exit(1);
