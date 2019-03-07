import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/dialog`;

  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('dialogpage', url);

  it('check normal dialog', () => {
    openEyes('dialog-normal');
    cy.get('.mdc-button:eq(0)').click();
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });

  it('check scrollable dialogs', () => {
    openEyes('dialog-scrollable');
    cy.get('.mdc-button:eq(1)').click();
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
