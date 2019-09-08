import {testScreenshot, baseURL} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/design`;

  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('designpage', url);
});
