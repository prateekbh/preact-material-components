var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

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
      tabindex = 0
    } = allprops,
      props = _objectWithoutProperties(allprops, [
        "disabled",
        "min",
        "max",
        "value",
        "step",
        "tabindex"
      ]);

    let dynamicProps = {};
    if (disabled) {
      dynamicProps["aria-disabled"] = true;
    }

    if (step) {
      dynamicProps["data-step"] = step;
    }

    return h(
      "div",
      _extends(
        {
          tabindex: tabindex,
          role: "slider",
          "aria-valuemin": min,
          "aria-valuemax": max,
          "aria-valuenow": value,
          "aria-label": "Select Value"
        },
        dynamicProps,
        props
      ),
      h(
        "div",
        { class: "mdc-slider__track-container" },
        h("div", { class: "mdc-slider__track" })
      ),
      h(
        "div",
        { class: "mdc-slider__thumb-container" },
        h(
          "svg",
          { class: "mdc-slider__thumb", width: "21", height: "21" },
          h("circle", { cx: "10.5", cy: "10.5", r: "7.875" })
        ),
        h("div", { class: "mdc-slider__focus-ring" })
      )
    );
  }
}
