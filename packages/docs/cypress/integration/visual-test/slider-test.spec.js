import {testScreenshot, baseURL, openEyes} from '../../utils/utils';

describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/slider`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('sliderPage');
  it('should give update value by `onChange` prop', () => {
    openEyes('slider drag');
    drag(
      '.mdc-slider--display-markers .mdc-slider__focus-ring',
      489.3343811035156,
      890.37
    );
    cy.eyesCheckWindow({
      sizeMode: 'selector', //mode
      selector: '.content.mdc-layout-grid'
    });
  });
});

function drag(selector, x, y) {
  cy.get(selector)
    .trigger('mousedown', {which: 1})
    .trigger('mousemove', {clientX: x, clientY: y})
    .trigger('mouseup', {force: true});
}
