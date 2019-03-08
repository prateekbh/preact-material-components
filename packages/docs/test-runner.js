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
  const packagesChanged = new Set(
    files
      .filter(file => file.match(packageRegexp))
      .map(pckg => pckg.match(packageRegexp)[1])
  );
  // remove docs from this set as it is does not have a test for itself.
  packagesChanged.delete('docs');
  console.log(`Detected changes in packages: ${[...packagesChanged.values()].join(', ')}`)
  if (packagesChanged.size === 0) {
    console.log('No changes in packages found, not running visual regression testing.');
    process.exit(0);
  } 
   else if (packagesChanged.has('base')) {
    // if base has changed it might impact every component
    // so run all of them.
    const {code} = shelljs.exec('cypress run');
    console.log(code);
    process.exit(code);
  } else {

    // run the tests for the packages which changed
    const {code} = shelljs.exec(
      `cypress run --spec cypress/integration/visual-test/button-test.spec.js`);
    console.log(code);
    process.exit(code);
  }
}

process.exit(0);
