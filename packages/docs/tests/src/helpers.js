const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');
const {createServer, Server} = require('http');
const {join} = require('path');

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

module.exports = {
  getServer,
  envBool,
  sleep
};
