// eslint-env node, mocha

const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const chrome = require('selenium-webdriver/chrome');
const {join} = require('path');
const mkdirp = require('mkdirp');
const serve = require('serve');
const pretty = require('pretty');
const {writeFileSync, readFileSync, unlinkSync} = require('fs');
const {expect} = require('chai');

const goldenDir = 'golden';
const testDir = 'generated';

const os = 'linux';

process.env.PATH = `${join(__dirname, 'bin', os)}:${process.env.PATH}`;

describe('docs site dom diff', async function() {
  this.timeout(30000);

  let server, drivers;

  before(async function() {
    // noinspection JSPotentiallyInvalidUsageOfThis
    this.timeout(15000);

    const serveDir = join(__dirname, '../build');
    server = serve(serveDir, {
      port: 8080,
      ignore: ['node_modules']
    });

    const ffoptions = new firefox.Options().headless();
    const choptions = new chrome.Options().headless();

    const ffdriver = {
      driver: new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(ffoptions)
        .build(),
      name: 'firefox'
    };
    const chdriver = {
      driver: new Builder()
        .forBrowser('chrome')
        .setChromeOptions(choptions)
        .build(),
      name: 'chrome'
    };

    drivers = [ffdriver, chdriver];

    // And its wide screen/small screen subdirectories.
    for (const dd of drivers) {
      mkdirp.sync(join(__dirname, testDir, 'dom', dd.name, 'component'));
    }

    // Artificial wait as serve takes time to boot sometimes
    await new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });
  });

  after(() => {
    server.stop();
    for (const dd of drivers) {
      dd.driver.quit();
    }
  });

  this.slow(20000);

  it("should match the Card page's dom against the golden directory", function() {
    return compare_doms(drivers, 'component/card');
  });
});

async function compare_doms(drivers, page) {
  for (const driver_desc of drivers) {
    const {driver, name} = driver_desc;
    await driver.get(`http://localhost:8080/${page}`);
    await driver.sleep(2000);
    const current_dom = pretty(await driver.getPageSource(), {ocd: true});
    const gen_fn = join(__dirname, testDir, 'dom', name, `${page}.html`);
    writeFileSync(gen_fn, current_dom);
    const expected_dom = readFileSync(
      join(__dirname, goldenDir, 'dom', name, `${page}.html`),
      'utf8'
    );

    expect(current_dom, 'DOMs should be the same').equals(expected_dom);

    unlinkSync(gen_fn);
  }
}
