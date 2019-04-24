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
  it('check menu-open', () => {
    cy.get('.mdc-button').click();
    openEyes('menu-open');
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid' //CSS Selector
    });
  });

  it('check menu-item-clicked', () => {
    cy.get('.mdc-button').click();
    cy.get('.mdc-menu-surface .mdc-list-item:nth-child(2)').click();
    openEyes('menu-item-clicked');
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid' //CSS Selector
    });
  });
});
