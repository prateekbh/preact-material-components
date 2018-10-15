const foxr = require('foxr').default;
const {join} = require('path');
const mkdirp = require('mkdirp');
const {takeAndCompareScreenshot} = require('./src/screenshot');
const {testDir, port} = require('./src/constants');
const {constants} = require('os');
const {getServer, getFirefox} = require('./src/helpers');
const chalk = require('chalk');

describe('Testing the documentation site', function() {
  this.timeout(15 * 1000);

  let server, browser, firefox, page;

  before(async function() {
    // noinspection JSPotentiallyInvalidUsageOfThis
    this.timeout(30 * 1000);

    const serverProm = getServer(port);
    const firefoxProm = getFirefox(port);

    // And its wide screen/small screen subdirectories.
    mkdirp.sync(join(testDir, 'wide/component'));
    mkdirp.sync(join(testDir, 'narrow/component'));

    firefox = await firefoxProm;
    browser = await foxr.connect();
    page = await browser.newPage();
    server = await serverProm;
  });

  after(async function() {
    // noinspection JSPotentiallyInvalidUsageOfThis
    this.timeout(15 * 1000);

    const promises = [];

    if (server) {
      console.info(chalk.cyan('  [info] Stopping server...'));
      promises.push(new Promise(resolve => server.close(resolve)));
    }

    if (browser) {
      console.info(chalk.cyan('  [info] Stopping marionette...'));
      if (page) {
        promises.push(page.close().then(() => browser.close()));
      } else {
        promises.push(browser.close());
      }
    }

    await Promise.all(promises);

    if (firefox) {
      console.info(chalk.cyan('  [info] Stopping firefox...'));
      firefox.kill(constants.signals.SIGINT);
    }

    console.info(chalk.cyan('  [info] Stopped everything'));
  });

  describe('For a desktop screen', async function() {
    beforeEach(async () => {
      await page.setViewport({
        width: 1920,
        height: 1080
      });
    });

    // noinspection JSPotentiallyInvalidUsageOfThis
    this.timeout(6 * 1000);
    this.slow(4 * 1000);

    it('Home desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, '', 'wide');
    });

    it('Button desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/button', 'wide');
    });

    it('Card desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/card', 'wide');
    });

    it('Checkbox desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/checkbox', 'wide');
    });

    it('Chips desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/chips', 'wide');
    });

    it('Dialog desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/dialog', 'wide');
    });

    it('Drawer desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/drawer', 'wide');
    });

    it('Elevation desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/elevation', 'wide');
    });

    it('Fab desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/fab', 'wide');
    });

    it('Formfield desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/form-field', 'wide');
    });

    it('Icon desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon', 'wide');
    });

    it('IconButton desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon-button', 'wide');
    });

    it('LayoutGrid desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/layout-grid', 'wide');
    });

    it.skip('LinearProgress desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(
        page,
        'component/linear-progress',
        'wide'
      );
    });

    it('List desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/list', 'wide');
    });

    it('Menu desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/menu', 'wide');
    });

    it('Radio desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/radio', 'wide');
    });

    it('Select desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/select', 'wide');
    });

    it('Slider desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/slider', 'wide');
    });

    it('Snackbar desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/snackbar', 'wide');
    });

    it('Switch desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/switch', 'wide');
    });

    it('TabBar desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/tabbar', 'wide');
    });

    it('Textfield desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/textfield', 'wide');
    });

    it('Theme desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/theme', 'wide');
    });

    it('Topappbar desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/top-app-bar', 'wide');
    });

    it('Typography desktop page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/typography', 'wide');
    });
  });

  describe('For a mobile screen', async function() {
    beforeEach(async () => {
      await page.setViewport({
        width: 320,
        height: 480
      });
    });

    // noinspection JSPotentiallyInvalidUsageOfThis
    this.timeout(3 * 1000);
    this.slow(2 * 1000);

    it('Home mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, '', 'narrow');
    });

    it('Button mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/button', 'narrow');
    });

    it('Card mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/card', 'narrow');
    });

    it('Checkbox mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/checkbox', 'narrow');
    });

    it('Chips mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/chips', 'narrow');
    });

    it('Dialog mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/dialog', 'narrow');
    });

    it('Drawer mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/drawer', 'narrow');
    });

    it('Elevation mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/elevation', 'narrow');
    });

    it('Fab mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/fab', 'narrow');
    });

    it('Formfield mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/form-field', 'narrow');
    });

    it('Icon mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon', 'narrow');
    });

    it('IconButton mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon-button', 'narrow');
    });

    it('LayoutGrid mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/layout-grid', 'narrow');
    });

    it.skip('LinearProgress mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(
        page,
        'component/linear-progress',
        'narrow'
      );
    });

    it('List mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/list', 'narrow');
    });

    it('Menu mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/menu', 'narrow');
    });

    it('Radio mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/radio', 'narrow');
    });

    it('Select mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/select', 'narrow');
    });

    it('Slider mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/slider', 'narrow');
    });

    it('Snackbar mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/snackbar', 'narrow');
    });

    it('Switch mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/switch', 'narrow');
    });

    it('TabBar mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/tabbar', 'narrow');
    });

    it('Textfield mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/textfield', 'narrow');
    });

    it('Theme mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/theme', 'narrow');
    });

    it('Topappbar mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/top-app-bar', 'narrow');
    });

    it('Typography mobile page should match against the screenshot in the golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/typography', 'narrow');
    });
  });
});
