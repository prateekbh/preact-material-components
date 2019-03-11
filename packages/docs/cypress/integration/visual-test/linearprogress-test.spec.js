import {testScreenshot, baseURL} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/linear-progress`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('linearprogressPage');
});
