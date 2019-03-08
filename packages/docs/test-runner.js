const shelljs = require('shelljs');
console.log(shelljs.env);
console.log('=================');
if (shelljs.env['TRAVIS_PULL_REQUEST'] !== 'false') {
  const packageRegexp = /packages\/([a-z]*)\/.*/;
  console.log(
    `cmd: git --no-pager diff --name-only ${shelljs.env['TRAVIS_COMMIT_RANGE']}`
  );
  const list = shelljs.exec(
    `git --no-pager diff --name-only ${shelljs.env['TRAVIS_COMMIT_RANGE']}`
  );
  console.log(list);
  const packagesChanged = list
    .filter(file => file.match(packageRegexp))
    .map(pckg => pckg.match(packageRegexp)[1]);
}

process.exit(1);
