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
    this._mdcProps = ["discrete"];
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
    this.setValue(); // set initial value programatically because of error if min is greater than initial max
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCSlider:change", this._onChange);
    this.MDComponent.unlisten("MDCSlider:input", this._onInput);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  setValue(props = this.props) {
    const { disabled = false, min = 0, max = 100, value, step } = props;
    if (this.MDComponent) {
      if (min > this.MDComponent.max) {
        this.MDComponent.max = max;
        this.MDComponent.min = min;
      } else {
        this.MDComponent.min = min;
        this.MDComponent.max = max;
      }

      this.MDComponent.value = value;
      this.MDComponent.disabled = disabled;
      this.MDComponent.step = step;
    }
  }

  materialDom(allprops) {
    const { tabindex = 0, ...props } = allprops;

    this.setValue(allprops);
    return (
      <div
        tabindex={tabindex}
        role="slider"
        aria-label="Select Value"
        {...props}
      >
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track" />
        </div>
        <div class="mdc-slider__thumb-container">
          {props.discrete && (
            <div class="mdc-slider__pin">
              <span class="mdc-slider__pin-value-marker" />
            </div>
          )}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div class="mdc-slider__focus-ring" />
        </div>
      </div>
    );
  }
}
