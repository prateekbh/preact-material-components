import {testScreenshot, baseURL, openEyes} from '../../utils/utils';

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
    cy.get('.mdc-top-app-bar__navigation-icon').click();
    cy.eyesCheckWindow('top-app-bar-clicked');
  });
});
