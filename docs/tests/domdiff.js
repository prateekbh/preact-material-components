// eslint-env node, mocha

const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const chrome = require('selenium-webdriver/chrome');
const {join} = require('path');
const mkdirp = require('mkdirp');
const serve = require('serve');
const pretty = require('pretty');
const {writeFileSync, readFileSync} = require('fs');
const {assert, expect} = require('chai');

const goldenDir = 'golden';
const testDir = 'generated';

process.env.PATH = `${join(__dirname, 'bin')}:${process.env.PATH}`;

describe('docs site dom diff', async function() {
  this.timeout(30000);

  let server;

  before(async function() {
    // noinspection JSPotentiallyInvalidUsageOfThis
    this.timeout(15000);

    const serveDir = join(__dirname, '../build');
    server = serve(serveDir, {
      port: 8080,
      ignore: ['node_modules']
    });

    // And its wide screen/small screen subdirectories.
    mkdirp.sync(join(__dirname, testDir, 'dom/component'));

    // Artificial wait as serve takes time to boot sometimes
    await new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });
  });

  const ffoptions = new firefox.Options().headless();
  const choptions = new chrome.Options().headless();

  const ffdriver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(ffoptions)
    .build();
  const chdriver = new Builder()
    .forBrowser('firefox')
    .setChromeOptions(choptions)
    .build();
  const drivers = [ffdriver, chdriver];

  after(() => {
    server.stop();
    ffdriver.quit();
    chdriver.quit();
  });

  this.slow(20000);

  it("should match the Card page's dom against the golden directory", function() {
    return compare_doms(drivers, 'component/card');
  });
});

async function compare_doms(drivers, page) {
  for (const driver of drivers) {
    await driver.get(`http://localhost:8080/${page}`);
    await driver.sleep(2000);
    const current_dom = pretty(await driver.getPageSource(), {ocd: true});
    writeFileSync(join(__dirname, testDir, 'dom', `${page}.html`), current_dom);
    const expected_dom = readFileSync(
      join(__dirname, goldenDir, 'dom', `${page}.html`),
      'utf8'
    );

    expect(current_dom, 'DOMs should be the same').equals(expected_dom);
  }
}
