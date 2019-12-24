import {testScreenshot, openEyes, baseURL, sleep} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/drawer`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('drawer');
  it('drawer-opened', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // drawer is currently broken in branch 2.0 as it has a focus trap.
      // remove this line after fixing it.
      return false;
    });
    openEyes('drawer-opened');
    cy.get('.mdc-top-app-bar__icon').click();
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.home.mdc-typography'
    });
  });

  it('should close with swipe to left', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // drawer is currently broken in branch 2.0 as it has a focus trap.
      // remove this line after fixing it.
      return false;
    });
    openEyes('drawer-opened-swipe');
    cy.get('.mdc-top-app-bar__icon').click();
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.home.mdc-typography',
      tag: 'opened'
    });
    doSwipe(5);
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.home.mdc-typography',
      tag: 'closed'
    });
  });

  it('should open with swipe to right', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // drawer is currently broken in branch 2.0 as it has a focus trap.
      // remove this line after fixing it.
      return false;
    });
    openEyes('drawer-closed-swipe');
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.home.mdc-typography',
      tag: 'closed'
    });
    doSwipe(85);
    sleep(500);
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.home.mdc-typography',
      tag: 'opened'
    });
  });
});

function doSwipe(x) {
  cy.get(`body`)
    .trigger('mousedown', {which: 1, clientX: 35, clientY: 10})
    .trigger('mousemove', {clientX: x, clientY: 10})
    .trigger('mouseup', {force: true});
}
