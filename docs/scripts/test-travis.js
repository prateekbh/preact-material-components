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
    return;
  }

  const archivePath = __dirname + '/failed-pictures.zip';
  const output = fs.createWriteStream(archivePath);
  const archive = archiver('zip', {
    zlib: {level: 9}
  });

  output.on('close', () => {
    request.post(
      {
        url: 'https://file.io',
        formData: {
          file: fs.createReadStream(archivePath)
        }
      },
      (err, httpResponse, body) => {
        if (err) {
          console.error("Couldn't upload pictures");
          process.exit(-1);
        }

        const result = JSON.parse(body);
        console.log(`Failed pictures: ${result.link}`);
        process.exit(-1);
      }
    );
  });

  shell.cd('tests/generated');
  archive.pipe(output);
  archive.glob('**/*.png');
  archive.finalize();
});
