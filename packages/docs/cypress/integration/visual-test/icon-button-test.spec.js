import {testScreenshot, openEyes, baseURL} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/icon-button`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('iconbuttonPage');

  it('check icon buttons', () => {
    openEyes('iconbuttons-clicked');
    cy.get('.mdc-icon-button').click();
    // Things like animations
    cy.wait(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
