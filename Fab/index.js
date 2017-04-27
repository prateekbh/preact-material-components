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
import MaterialComponent from "../MaterialComponent.jsx";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Fab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "fab";
    this._mdcProps = ["mini", "plain"];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    return h(
      "button",
      _extends({}, props, { ref: control => (this.control = control) }),
      props.children
    );
  }
}
