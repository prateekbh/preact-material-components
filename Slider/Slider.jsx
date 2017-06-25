import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSlider } from "@material/slider";

/**
 * @prop disabled = false
 */
export default class Slider extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "slider";
    this._mdcProps = [];
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
  }
  _onChange() {
    if (this.props.onChange) {
      this.props.onChange(this.MDComponent.value);
    }
  }
  _onInput() {
    if (this.props.onInput) {
      this.props.onInput(this.MDComponent.value);
    }
  }
  componentDidMount() {
    this.MDComponent = new MDCSlider(this.base);
    this.MDComponent.listen("MDCSlider:change", this._onChange);
    this.MDComponent.listen("MDCSlider:input", this._onInput);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCSlider:change", this._onChange);
    this.MDComponent.unlisten("MDCSlider:input", this._onInput);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(allprops) {
    const {
      disabled = false,
      min = 0,
      max = 100,
      value,
      step,
      tabindex = 0,
      ...props
    } = allprops;

    let dynamicProps = {};
    if (disabled) {
      dynamicProps["aria-disabled"] = true;
    }

    if (step) {
      dynamicProps["data-step"] = step;
    }

    return (
      <div
        tabindex={tabindex}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Select Value"
        {...dynamicProps}
        {...props}
      >
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track" />
        </div>
        <div class="mdc-slider__thumb-container">
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div class="mdc-slider__focus-ring" />
        </div>
      </div>
    );
  }
}
