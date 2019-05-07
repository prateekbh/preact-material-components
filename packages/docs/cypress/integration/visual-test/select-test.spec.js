import {testScreenshot, baseURL} from '../../utils/utils';
import {idText} from 'typescript';

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
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});
