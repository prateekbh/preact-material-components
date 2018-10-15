const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');
const {spawn, ChildProcess} = require('child_process');
const {createServer, Server} = require('http');
const {resolve: resolvePath, join} = require('path');
const compact = require('lodash.compact');
const newProfile = require('create-firefox-profile');
const fs = require('fs');
const chalk = require('chalk');
const foxr = require('foxr').default;

/**
 * Returns a promise that resolves after a certain time
 * @param ms {number} Milliseconds to sleep
 * @returns {Promise<any>}
 */
function sleep(ms) {
  return new Promise(resolve1 => setTimeout(resolve1, 100));
}

/**
 * Returns the boolean value of an environment variable. Returns default value when not set or invalid.
 * @param env {string} Name of the environment variable
 * @param def {boolean} default value
 * @returns {boolean}
 */
function envBool(env, def) {
  if (env in process.env) {
    const val = JSON.parse(process.env[env]);
    if (['boolean', 'number'].includes(typeof val)) {
      return !!val;
    }
  }
  return def;
}

/**
 * Creates a http server
 * @param port {number} Port to listen on
 * @returns {Promise<Server>}
 */
async function getServer(port) {
  const serveDir = join(__dirname, '../../build');
  const serve = serveStatic(serveDir, {index: ['index.html']});
  const server = createServer((req, res) => {
    serve(req, res, finalhandler(req, res));
  });
  server.listen(port);
  return server;
}

/**
 * Starts the firefox process as marionette and waits until it is running
 * @returns {Promise<ChildProcess>}
 */
async function getFirefox(port) {
  const profile = await new Promise((resolve, reject) => {
    newProfile(
      {
        prefs: {
          'app.normandy.first_run': false,
          'browser.feeds.showFirstRunUI': false,
          'toolkit.telemetry.reportingpolicy.firstRun': false,
          'startup.homepage_welcome_url': 'about:blank',
          'gfx.webrenderer.all': true
        }
      },
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
  const firefox = spawn(
    'firefox',
    compact([
      '--profile',
      profile,
      envBool('SHOW_FIREFOX', false) ? null : '--headless',
      '--marionette',
      '--no-remote',
      '--safe-mode',
      '--private',
      `http://localhost:${port}`
    ])
  );

  const firefoxLog = resolvePath(profile, 'firefox.log');
  const firefoxLogStream = fs.createWriteStream(firefoxLog);
  firefox.stdout.pipe(firefoxLogStream);
  firefox.stderr.pipe(firefoxLogStream);
  console.info(chalk.cyan(`  [info] Logging firefox output to ${firefoxLog}`));

  // Artificial wait as firefox takes time to boot
  await new Promise(async (resolve, reject) => {
    let run = true;
    const timeout = setTimeout(() => {
      run = false;
      console.error('Firefox log:');
      console.error(fs.readFileSync(firefoxLog, {encoding: 'utf8'}));
      reject(new Error('Timeout while starting firefox'));
    }, 20 * 1000);
    while (run) {
      try {
        await foxr.connect();
        resolve();
        clearTimeout(timeout);
        return;
      } catch (e) {}
      await sleep(100);
    }
  });

  return firefox;
}

module.exports = {
  getServer,
  getFirefox,
  envBool,
  sleep
};
