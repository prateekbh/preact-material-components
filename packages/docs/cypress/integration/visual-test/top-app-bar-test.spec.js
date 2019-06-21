import {testScreenshot, baseURL, openEyes, sleep} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/top-app-bar`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('topAppBarPage');
  it('should respond to onNav event', () => {
    openEyes('top-app-bar-clicked');
    cy.get('.top-app-bar-demo .mdc-top-app-bar__navigation-icon').click();
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.top-app-bar-demo'
    });
  });
});
