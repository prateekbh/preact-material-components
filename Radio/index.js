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
import { MDCRadio } from "@material/radio/";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Radio extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "radio";
  }
  componentDidMount() {
    this.MDComponent = MDCRadio.attachTo(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(allprops) {
    const { className } = allprops,
      props = _objectWithoutProperties(allprops, ["className"]);
    return h(
      "div",
      {
        className: className + "",
        ref: control => {
          this.control = control;
        }
      },
      h(
        "input",
        _extends(
          { className: "mdc-radio__native-control", type: "radio" },
          props
        )
      ),
      h(
        "div",
        { className: "mdc-radio__background" },
        h("div", { className: "mdc-radio__outer-circle" }),
        h("div", { className: "mdc-radio__inner-circle" })
      )
    );
  }
}
