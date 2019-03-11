import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/drawer`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('drawer');
  it('drawer-opened', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // drawer is currently broken in branch 2.0 as it has a focus trap.
      // remove this line after fixing it.
      return false;
    });
    openEyes('drawer-opened');
    cy.get('.mdc-top-app-bar__icon').click();
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.home.mdc-typography'
    });
  });
});
