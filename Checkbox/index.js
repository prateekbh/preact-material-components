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
import MaterialComponent from "../MaterialComponent.jsx";
import { MDCCheckbox } from "@material/checkbox/";

/**
 */
export default class Checkbox extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "checkbox";
  }
  componentDidMount() {
    this.MDComponent = new MDCCheckbox(this.control);
  }
  materialDom(allprops) {
    const { className } = allprops,
      props = _objectWithoutProperties(allprops, ["className"]);
    return h(
      "div",
      {
        className: "mdc-checkbox " + className,
        ref: control => {
          this.control = control;
        }
      },
      h(
        "input",
        _extends(
          {
            type: "checkbox",
            className: "mdc-checkbox__native-control"
          },
          props
        )
      ),
      h(
        "div",
        { className: "mdc-checkbox__background" },
        h(
          "svg",
          {
            version: "1.1",
            className: "mdc-checkbox__checkmark",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          },
          h("path", {
            className: "mdc-checkbox__checkmark__path",
            fill: "none",
            stroke: "white",
            d: "M1.73,12.91 8.1,19.28 22.79,4.59"
          })
        ),
        h("div", { className: "mdc-checkbox__mixedmark" })
      )
    );
  }
}
