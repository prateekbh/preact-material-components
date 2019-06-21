import {testScreenshot, openEyes, baseURL, sleep} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/snackbar`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('snackbar', url);
  it('check snackbar-click', () => {
    openEyes('snackbar-clicked');
    cy.get('.mdc-button.show-snack').click();
    sleep(500);
    cy.eyesCheckWindow('snackbar-clicked');
  });
});
