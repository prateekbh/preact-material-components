const shelljs = require('shelljs');

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
  const packagesChanged = new Set(files
    .filter(file => file.match(packageRegexp))
    .map(pckg => pckg.match(packageRegexp)[1]));
  if (packagesChanged.has("base")) {
    shelljs.exec('cypress run');

  } else {
    shelljs.exec('cypress run --spec cypress/integration/');
  }

}

process.exit(1);
