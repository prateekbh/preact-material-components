// - page is a reference to the Foxr page.
// - route is the path you're loading, which I'm using to name the file.
// - filePrefix is either "wide" or "narrow", since I'm automatically testing both.
const {testDir, goldenDir, port} = require('./constants');
const {PNG} = require('pngjs');
const pixelmatch = require('pixelmatch');
const fs = require('fs');
const {join} = require('path');
const {expect} = require('chai');

async function takeAndCompareScreenshot(page, route, filePrefix) {
  // If you didn't specify a file, use the name of the route.
  let fileName = filePrefix + '/' + (route ? route : 'index');
  // Start the browser, go to that page, and take a screenshot.
  await page.goto(`http://localhost:${port}/${route}`, {
    waitUntil: 'load'
  });
  // Let the animations happen
  await new Promise(resolve1 => setTimeout(resolve1, 500));
  const body = await page.$('.content');
  await body.screenshot({path: join(testDir, `${fileName}.png`)});
  // Test to see if it's right.
  return compareScreenshots(fileName);
}

async function compareScreenshots(fileName) {
  const filePath = join(testDir, `${fileName}.png`);
  const img1 = new PNG();
  await new Promise(resolve => {
    fs.createReadStream(join(testDir, `${fileName}.png`))
      .pipe(img1)
      .on('parsed', resolve);
  });
  const img2 = new PNG();
  await new Promise(resolve => {
    fs.createReadStream(join(goldenDir, `${fileName}.png`))
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

module.exports = {
  takeAndCompareScreenshot
};
