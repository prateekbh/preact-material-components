import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/chips`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('chips');

  it('check choice chips', () => {
    openEyes('choiceChips-selected');
    for (let i = 0; i < 4; i++) {
      cy.get('.choice .mdc-button').click();
    }
    var chips = cy.get('.choice .mdc-chip');
    chips.each(chip => {
      cy.wrap(chip).click();
    });
    cy.eyesCheckWindow({
      target: 'region', //mode
      selector: '.choice'
    });
  });

  it('check filter chips', () => {
    openEyes('filterChips-selected');
    for (let i = 0; i < 4; i++) {
      cy.get('.filter .mdc-button').click();
    }
    var chips = cy.get('.filter .mdc-chip');
    chips.each(chip => {
      cy.wrap(chip).click();
    });
    cy.eyesCheckWindow({
      target: 'region', //mode
      selector: '.filter'
    });
  });
});
