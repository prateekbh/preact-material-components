const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const path = require('path');
const serve = require('serve');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const mkdirp = require('mkdirp');

const testDir = 'tests/generated';
const goldenDir = 'tests/golden';

describe('docs site', () => {
  let server, browser, page;

  before(async () => {
    const serveDir = path.join(__dirname, '../build');
    server = serve(serveDir, {
      port: 8080,
      ignore: ['node_modules']
    });

    // And its wide screen/small screen subdirectories.
    mkdirp.sync(`${testDir}/wide/component`);

    // Artificial wait as serve takes time to boot sometimes
    await new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });

    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
    server.stop();
  });

  describe('desktop screen', async () => {
    beforeEach(async function() {
      return page.setViewport({
        width: 1280,
        height: 720
      });
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

    it('should match IconToggle page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/icon-toggle', 'wide');
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

    it('should match Tabs page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/tabs', 'wide');
    });

    it('should match Textfield page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/textfield', 'wide');
    });

    it('should match Theme page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/theme', 'wide');
    });

    it('should match Toolbar page against golden directory', () => {
      return takeAndCompareScreenshot(page, 'component/toolbar', 'wide');
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
  await page.goto(`http://localhost:8080/${route}`, {
    waitUntil: route === 'component/card' ? 'networkidle0' : 'load' //card has images to load
  });
  await page.screenshot({path: `${testDir}/${fileName}.png`, fullPage: true});
  // Test to see if it's right.
  return compareScreenshots(fileName);
}

function compareScreenshots(fileName) {
  return new Promise((resolve, reject) => {
    const filePath = `${testDir}/${fileName}.png`;
    const img1 = fs
      .createReadStream(filePath)
      .pipe(new PNG())
      .on('parsed', doneReading);
    const img2 = fs
      .createReadStream(`${goldenDir}/${fileName}.png`)
      .pipe(new PNG())
      .on('parsed', doneReading);

    let filesRead = 0;
    function doneReading() {
      // Wait until both files are read.
      if (++filesRead < 2) return;

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
          threshold: 0.1
        }
      );

      // The files should look the same.
      expect(numDiffPixels, 'number of different pixels').equal(0);
      fs.unlinkSync(filePath);
      resolve();
    }
  });
}
