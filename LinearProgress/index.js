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

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCLinearProgress } from "@material/linear-progress";

/**
 * @prop indeterminate = false
 * @prop reversed = false
 * @prop accent = false
 */
export default class LinearProgress extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "linear-progress";
    this._mdcProps = ["indeterminate", "reversed", "accent"];
  }
  componentDidMount() {
    this.MDComponent = new MDCLinearProgress(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(props) {
    return h(
      "div",
      _extends(
        {
          role: "progressbar"
        },
        props,
        {
          ref: control => (this.control = control)
        }
      ),
      h("div", { className: "mdc-linear-progress__buffering-dots" }),
      h("div", { className: "mdc-linear-progress__buffer" }),
      h(
        "div",
        {
          className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
        },
        h("span", { className: "mdc-linear-progress__bar-inner" })
      ),
      h(
        "div",
        {
          className:
            "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
        },
        h("span", { className: "mdc-linear-progress__bar-inner" })
      )
    );
  }
}
