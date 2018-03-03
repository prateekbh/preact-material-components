// Dependencies
const { spawn } = require("child_process");
const async = require("async");
const fs = require("fs");
const shell = require("shelljs");
const request = require("request");
const path = require("path");
const archiver = require("archiver");
const GitHub = require("github-api");
const url = require("url");

// Config
const USER = "prateekbh";
const REPO = "preact-material-components";
const TOKEN = process.env.GH_TOKEN;

// Run tests
const runTests = spawn("npm", ["test"], { shell: true });

runTests.stdout.pipe(process.stdout);
runTests.stderr.pipe(process.stderr);
runTests.on("error", console.error);

runTests.on("close", code => {
  // If no error code, exit without error
  if (!code) {
    return;
  }

  // Create zip archive of failed pictures
  const archivePath = __dirname + "/failed-pictures.zip";
  const output = fs.createWriteStream(archivePath);
  const archive = archiver("zip", {
    zlib: { level: 9 }
  });

  output.on("close", function() {
    // Data
    const pr = process.env.TRAVIS_PULL_REQUEST;
    const commit = process.env.TRAVIS_COMMIT;

    const gh = new GitHub({ token: TOKEN });
    const gist = gh.getGist();

    // Create gist
    gist
      .create({
        public: false,
        description: `Failed pictures #${pr}`,
        files: {
          "README.md": {
            content: `Failed pictures from PR [#${pr}](https://github.com/${USER}/${REPO}/pull/${pr}), commit [${commit}](https://github.com/${USER}/${REPO}/pull/${pr}/commits/${commit})`
          }
        }
      })
      .then(result => {
        const url = `https://${TOKEN}@gist.github.com/${result.data.id}.git`;

        // Add zip to Gist (can't do it directly sadly)
        shelljs.exec(`git clone ${url} gist`);
        shelljs.cp("failed-pictures.zip", "gist");
        shelljs.cd("gist");
        shelljs.exec("git add failed-pictures.zip");
        shelljs.exec('git commit -m "Add pictures"');
        shelljs.exec("git push origin master");
        shelljs.cd("..");
        shelljs.rm("-rf", "gist");

        return gist.read();
      })
      .then(result => {
        const link = url.parse(result.data.html_url);
        link.pathname = `${result.data.owner.login}${
          link.pathname
        }/raw/failed-pictures.zip`;

        return url.format(link);
      })
      .then(link => {
        // Post comment to PR
        gh
          .getIssues(USER, REPO)
          .createIssueComment(
            pr,
            `Visual diff testing failed for [${
              shelljs.ls("**/*.png").length
            } images](${link})`
          );
      })
      .catch(console.error);
  });

  // Add pictures to zip
  shell.cd("tests/generated");
  archive.pipe(output);
  archive.glob("**/*.png");
  archive.finalize();
});
