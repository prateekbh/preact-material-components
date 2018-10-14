const {Socket} = require('net');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');
const {spawn, ChildProcess} = require('child_process');
const {createServer, Server} = require('http');
const {resolve: resolvePath, join} = require('path');
const compact = require('lodash.compact');
const newProfile = require('create-firefox-profile');
const fs = require('fs');
const chalk = require('chalk');

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
 * Try if port is reachable
 * @param host {string} Host to connect to
 * @param port {number} Port to connect to
 * @returns {Promise<void>}
 */
function tryConnection(host, port) {
  const socket = new Socket();
  return new Promise((resolve, reject) => {
    const rejectAndDestroy = error => {
      reject(error);
      socket.destroy();
    };
    const resolveAndDestroy = () => {
      resolve();
      socket.destroy();
    };

    socket
      .setTimeout(1000)
      .once('connect', resolveAndDestroy)
      .once('timeout', () => rejectAndDestroy(new Error('Timeout Connecting')))
      .once('error', err => rejectAndDestroy(err))
      .connect(
        port,
        host
      );
  });
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
    }, 10 * 1000);
    while (run) {
      try {
        await tryConnection('localhost', 2828);
        resolve();
        clearTimeout(timeout);
        return;
      } catch (e) {}
      await new Promise(resolve1 => setTimeout(resolve1, 100));
    }
  });

  return firefox;
}

module.exports = {
  getServer,
  getFirefox,
  envBool
};
