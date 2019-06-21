import {openEyes, testScreenshot, baseURL, sleep} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/form-field`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('form-fieldpage');
  it('should select control from label', async () => {
    openEyes('form-fieldpage-control-selection');

    cy.get('.radio-example label').click();
    // Things like animations
    await sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.radio-example'
    });
  });
});
