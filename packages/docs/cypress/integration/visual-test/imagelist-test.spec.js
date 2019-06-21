import {testScreenshot, baseURL} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/image-list`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('imagelistPage');
});
