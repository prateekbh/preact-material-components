import {openEyes, testScreenshot, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/form-field`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('form-fieldpage');
  it('should select control from label', () => {
    openEyes('form-fieldpage-control-selection');

    cy.get('.mdc-form-field label').click();

    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
