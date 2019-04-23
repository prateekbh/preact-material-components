import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/menu`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('menu');

  // Menu is completely broken in 2.0
  it.skip('check menu-click', () => {
    cy.get('.mdc-button').click();
    openEyes('menu-click');
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.mdc-menu'
    });
    cy.get('.mdc-menu-surface .mdc-list-item:nth-child(2)').click();
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.mdc-menu'
    });
  });
});
