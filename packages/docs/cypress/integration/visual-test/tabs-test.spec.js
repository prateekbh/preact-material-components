import {testScreenshot, openEyes, baseURL, sleep} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/tabs`;

  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('tabspage', url);

  it('check tab scrolling', () => {
    openEyes('dialog-normal');
    cy.get('#icontabs .mdc-tab:nth-child(2)').click();
    // Things like animations
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '#icontabs'
    });
  });
});
