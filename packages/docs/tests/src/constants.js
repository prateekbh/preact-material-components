const {resolve} = require('path');

const testDir = resolve(__dirname, '../generated');
const goldenDir = resolve(__dirname, '../golden');
const port = 8343;

module.exports = {
  testDir,
  goldenDir,
  port
};
