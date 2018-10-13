const foxr = require('foxr').default;
const {expect} = require('chai');
const path = require('path');
const serve = require('serve');
const fs = require('fs');
const {PNG} = require('pngjs');
const pixelmatch = require('pixelmatch');
const mkdirp = require('mkdirp');
const {spawn} = require('child_process');
const {constants} = require('os');
const compact = require('lodash.compact');
const newProfile = require('create-firefox-profile');

const testDir = 'tests/generated';
const goldenDir = 'tests/golden';

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

describe('docs site', () => {
  let server, browser, page, firefox;

  before(async () => {
    const profile = await new Promise((resolve, reject) => {
      newProfile(
        {
          prefs: {
            'app.normandy.first_run': false,
            'browser.feeds.showFirstRunUI': false,
            'toolkit.telemetry.reportingpolicy.firstRun': false,
            'startup.homepage_welcome_url': 'about:blank'
          }
        },
        (err, res) => {
          err ? reject(err) : resolve(res);
        }
      );
    });
    firefox = spawn(
      'firefox',
      compact([
        '--profile',
        profile,
        envBool('NO_HEADLESS', false) ? null : '--headless',
        '--marionette',
        '--no-remote',
        '--safe-mode',
        '--private',
        'http://localhost:8080'
      ])
    );

    firefox.stdout.pipe(process.stdout);
    firefox.stderr.pipe(process.stderr);

    const serveDir = path.join(__dirname, '../build');
    server = serve(serveDir, {
      port: 8080,
      ignore: ['node_modules']
    });

    // And its wide screen/small screen subdirectories.
    mkdirp.sync(`${testDir}/wide/component`);

    // Artificial wait as serve and firefox take time to boot
    await new Promise(resolve => {
      setTimeout(() => resolve(), 5000);
    });

    browser = await foxr.connect();
  });

  after(async () => {
    if (page) {
      await page.close();
    }
    if (browser) {
      await browser.close();
    }
    if (server) {
      server.stop();
    }
    if (firefox) {
      firefox.kill(constants.signals.SIGINT);
    }
  });

  describe('desktop screen', async () => {
    let page;
    before(async function() {
      page = await browser.newPage();
      await page.setViewport({
        width: 1920,
        height: 1080
      });
    });

    after(async () => {
      if (page) {
        await page.close();
      }
    });

    it('should match Home page against golden directory', () => {
      return takeAndCompareScreenshot(page, '', 'wide');
    });

    it('should match Button page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/button', 'wide');
    });

    it('should match Card page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/card', 'wide');
    });

    it('should match Checkbox page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/checkbox', 'wide');
    });

    it('should match Chips page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/chips', 'wide');
    });

    it('should match Dialog page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/dialog', 'wide');
    });

    it('should match Drawer page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/drawer', 'wide');
    });

    it('should match Elevation page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/elevation', 'wide');
    });

    it('should match Fab page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/fab', 'wide');
    });

    it('should match Formfield page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/form-field', 'wide');
    });

    it('should match Icon page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon', 'wide');
    });

    it('should match IconButton page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon-button', 'wide');
    });

    it('should match LayoutGrid page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/layout-grid', 'wide');
    });

    it.skip('should match LinearProgress page against golden directory', () => {
      return takeAndCompareScreenshot(
        page,
        'component/linear-progress',
        'wide'
      );
    });

    it('should match List page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/list', 'wide');
    });

    it('should match Menu page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/menu', 'wide');
    });

    it('should match Radio page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/radio', 'wide');
    });

    it('should match Select page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/select', 'wide');
    });

    it('should match Slider page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/slider', 'wide');
    });

    it('should match Snackbar page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/snackbar', 'wide');
    });

    it('should match Switch page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/switch', 'wide');
    });

    it('should match TabBar page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/tabbar', 'wide');
    });

    it('should match Textfield page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/textfield', 'wide');
    });

    it('should match Theme page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/theme', 'wide');
    });

    it('should match Topappbar page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/top-app-bar', 'wide');
    });

    it('should match Typography page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/typography', 'wide');
    });
  });
});

// - page is a reference to the Puppeteer page.
// - route is the path you're loading, which I'm using to name the file.
// - filePrefix is either "wide" or "narrow", since I'm automatically testing both.
async function takeAndCompareScreenshot(page, route, filePrefix) {
  // If you didn't specify a file, use the name of the route.
  let fileName = filePrefix + '/' + (route ? route : 'index');

  // Start the browser, go to that page, and take a screenshot.
  await page.goto(`http://localhost:8080/${route}`);
  await new Promise(resolve => {
    setTimeout(() => resolve(), 500);
  });
  const body = await page.$('.content');
  const img = new PNG();
  img.parse(await body.screenshot({path: `${testDir}/${fileName}.png`}));
  // Test to see if it's right.
  return compareScreenshots(img, fileName);
}

async function compareScreenshots(img1, fileName) {
  const filePath = `${testDir}/${fileName}.png`;
  const img2 = new PNG();
  await new Promise(resolve => {
    fs.createReadStream(`${goldenDir}/${fileName}.png`)
      .pipe(img2)
      .on('parsed', resolve);
  });

  // The files should be the same size.
  expect(img1.width, 'image widths are the same').equal(img2.width);
  expect(img1.height, 'image heights are the same').equal(img2.height);

  // Do the visual diff.
  const diff = new PNG({width: img1.width, height: img2.height});
  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    img1.width,
    img1.height,
    {
      threshold: 0.2
    }
  );

  // The files should look the same.
  expect(numDiffPixels, 'number of different pixels').equal(0);
  fs.unlinkSync(filePath);
}
