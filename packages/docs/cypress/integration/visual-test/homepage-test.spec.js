import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = baseURL;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('homepage');
  it('check homepage-dark', () => {
    openEyes('homepage-dark');
    cy.get('.switch-darkmode.mdc-switch').click();
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
