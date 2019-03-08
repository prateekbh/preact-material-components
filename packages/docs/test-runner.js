const shelljs = require('shelljs');
console.log(shelljs.env);
console.log('=================');
if (shelljs.env['TRAVIS_PULL_REQUEST'] !== 'false') {
  const packageRegexp = /packages\/([a-z]*)\/.*/;
  console.log(
    `cmd: git --no-pager diff --name-only ${shelljs.env['TRAVIS_COMMIT_RANGE']}`
  );
  const {stderr, stdout} = shelljs.exec(
    `git --no-pager diff --name-only ${shelljs.env['TRAVIS_COMMIT_RANGE']}`
  );
  if (stderr) {
    console.log(stderr);
    process.exit(-1);
  }
  const files = stdout.split('\n');
  const packagesChanged = files
    .filter(file => file.match(packageRegexp))
    .map(pckg => pckg.match(packageRegexp)[1]);
  console.log({packagesChanged});
}

process.exit(1);
