import {testScreenshot, baseURL, openEyes, sleep} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/select`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('selectPage');
  it('should give selected value in the onSelect event handler', () => {
    openEyes('enhanced select option selected');
    cy.get('.enhanced-select .mdc-select__selected-text').click();
    cy.get('.mdc-select__menu.mdc-menu:visible [data-value=item2]').click();
    // Things like animations
    sleep(500);
    cy.eyesCheckWindow({
      target: 'region', //mode
      selector: '.enhanced-select'
    });
  });
});
