import {testScreenshot, openEyes, baseURL, sleep} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/menu`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('menu');

  it('check menu-open', async () => {
    cy.get('.mdc-button').click();
    await sleep(1000);
    openEyes('menu-open');
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid' //CSS Selector
    });
  });

  it('check menu-item-clicked', async () => {
    cy.get('.mdc-button').click();
    await sleep(200);
    cy.get('.mdc-menu-surface .mdc-list-item:eq(2)').click();
    openEyes('menu-item-clicked');
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid' //CSS Selector
    });
  });
});
