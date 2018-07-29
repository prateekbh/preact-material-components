const {spawn} = require('child_process');
const async = require('async');
const fs = require('fs');
const shell = require('shelljs');
const request = require('request');
const path = require('path');
const archiver = require('archiver');

const runTests = spawn('npm', ['test'], {shell: true});

runTests.stdout.pipe(process.stdout);
runTests.stderr.pipe(process.stderr);
runTests.on('error', console.error);

runTests.on('close', code => {
  if (!code) {
    console.log('Tests succeeded');
    return;
  }

  if (process.env.TRAVIS_PULL_REQUEST === 'false') {
    console.log("Not uploading pictures because it's not a pull request");
    process.exit(-1);
  }

  shell.cd('tests/generated');
  let type, glob;
  if (shell.ls('dom/**/*.html').length > 0) {
    type = 'DOMs';
    glob = 'dom/**/*.html';
  } else {
    type = 'pictures';
    glob = '**/*.png';
  }

  const archivePath = `${__dirname}/failed-${type.toLowerCase()}.zip`;
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
              filename: `failed-${type.toLowerCase()}.zip`,
              contentType: 'application/zip'
            }
          },
          comment: `Failed ${type} (${
            shell.ls(glob).length
          }): [failed-${type.toLowerCase()}.zip]`
        }
      },
      (err, httpResponse, body) => {
        console.error(
          err
            ? `Couldn't upload ${type}: ${err}`
            : `${type} uploaded successfully`
        );
        process.exit(-1);
      }
    );
  });

  console.log('Creating archive');
  archive.pipe(output);
  archive.glob(glob);
  archive.finalize();
});
