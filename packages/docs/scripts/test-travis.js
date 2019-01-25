const {spawn} = require('child_process');
const fs = require('fs');
const shell = require('shelljs');
const request = require('request');
const archiver = require('archiver');
const chalk = require('chalk');

const runTests = spawn('yarn', ['test:mocha', '--colors'], {
  shell: true
});

runTests.stdout.pipe(process.stdout);
runTests.stderr.pipe(process.stderr);
runTests.on('error', console.error);

runTests.on('close', code => {
  if (!code) {
    console.info('Tests succeeded');
    return;
  }

  if (process.env.TRAVIS_PULL_REQUEST === 'false') {
    console.warn("Not uploading pictures because it's not a pull request");
    process.exit(-1);
  }

  try {
    fs.accessSync('tests/generated');
    if (!fs.statSync('tests/generated').isDirectory()) {
      // noinspection ExceptionCaughtLocallyJS
      throw new ErrorEvent('');
    }
  } catch (e) {
    console.error(
      chalk.red("Can't upload failed Pictures! Did the compile fail?")
    );
    process.exit(-2);
  }

  if (!(shell.ls('tests/generated/**/*.png').length > 0)) {
    console.error(
      chalk.red("Can't upload failed Pictures! Did the test setup fail?")
    );
    process.exit(-2);
  }

  const archivePath = __dirname + '/failed-pictures.zip';
  const output = fs.createWriteStream(archivePath);
  const archive = archiver('zip', {
    zlib: {level: 9}
  });

  output.on('close', () => {
    console.log('Archive done, uploading...');
    request.post(
      {
        url: `https://artipost.io/travis/artifacts/${
          process.env.TRAVIS_BUILD_ID
        }`,
        formData: {
          file: {
            value: fs.createReadStream(archivePath),
            options: {
              filename: 'failed-pictures.zip',
              contentType: 'application/zip'
            }
          },
          comment: `Failed pictures (${
            shell.ls('**/*.png').length
          }): [failed-pictures.zip]`
        }
      },
      (err, httpResponse, body) => {
        console.error(
          err
            ? `Couldn't upload pictures: ${err}`
            : 'Pictures uploaded successfully'
        );
        process.exit(-1);
      }
    );
  });
  console.log('Creating archive');
  shell.cd('tests/generated');
  archive.pipe(output);
  archive.glob('**/*.png');
  archive.finalize();
});
