const shelljs = require('shelljs');

console.log(shelljs.env['$TRAVIS_PULL_REQUEST']);

process.exit(1);
