export function testScreenshot(pageName) {
  it(`check ${pageName}`, () => {
    openEyes(pageName);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid' //CSS Selector
    });
  });
}

export function openEyes(testName) {
  cy.eyesOpen({
    appName: 'Preact Material Components',
    testName: testName,
    showLogs: true,
    browser: [
      {width: 1920, height: 1080, name: 'chrome'},
      {width: 800, height: 600, name: 'firefox'},
      {deviceName: 'iPhone X'}
    ]
  });
}

export const baseURL = 'http://localhost:8080';

/**
 * @param time {number}: Time to sleep in ms
 * @returns {void}
 */
export function sleep(time) {
  cy.wait(time);
  /*return new Promise(resolve => {
    setTimeout(resolve, time);
  });*/
}
