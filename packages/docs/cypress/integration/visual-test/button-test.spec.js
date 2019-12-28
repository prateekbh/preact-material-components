import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/button`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('buttonpage');

  it('check all buttons', () => {
    var buttons = cy.get('.mdc-button:enabled');
    buttons.each(button => {
      cy.wrap(button).click();
    });
    openEyes('buttons-clicked');
    cy.eyesCheckWindow({
      target: 'region', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
