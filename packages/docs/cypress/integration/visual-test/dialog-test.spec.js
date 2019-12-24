import {testScreenshot, openEyes, baseURL, sleep} from '../../utils/utils';
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
    cy.get('.normal_trigger').click();
    // Things like animations
    sleep(500);
    cy.eyesCheckWindow({
      target: 'region', //mode
      selector: '.mdc-dialog.mdc-dialog--open'
    });
  });

  it('check scrollable dialogs', () => {
    openEyes('dialog-scrollable');
    cy.get('.scrollable_trigger').click();
    // Things like animations
    sleep(500);
    cy.eyesCheckWindow({
      target: 'region', //mode
      selector: '.mdc-dialog.mdc-dialog--open'
    });
  });
});
