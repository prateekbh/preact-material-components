import {testScreenshot, baseURL, openEyes} from '../../utils/utils';
import {idText} from 'typescript';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/switch`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('switchPage');
});
