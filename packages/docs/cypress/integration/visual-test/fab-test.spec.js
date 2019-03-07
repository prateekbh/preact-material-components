import {openEyes, testScreenshot, baseURL} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/fab`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('fabpage');

  it('check all buttons', () => {
    openEyes('fab-buttons-clicked');

    var buttons = cy.get('.mdc-fab');
    buttons.each(button => {
      cy.wrap(button).click();
    });
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
