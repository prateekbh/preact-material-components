import {testScreenshot, baseURL} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/icon`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('iconPage');
});
