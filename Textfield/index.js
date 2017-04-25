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
import { MDCTextfield } from "@material/textfield/";

/**
 * @prop fullwidth = false
 * @prop multiline = false
 */
export default class Textfield extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "textfield";
    this.state = {
      showFloatingLabel: false
    };
    this._mdcProps = ["fullwidth", "multiline"];
  }
  componentDidMount() {
    this.setState({
      showFloatingLabel: true
    });
    this.MDComponent = new MDCTextfield(this.control);
  }
  materialDom(allprops) {
    const { className } = allprops,
      props = _objectWithoutProperties(allprops, ["className"]);
    return h(
      "div",
      { className: className + "", ref: control => (this.control = control) },
      props.multiline
        ? h("textarea", _extends({ className: "mdc-textfield__input" }, props))
        : h(
            "input",
            _extends({ type: "text", className: "mdc-textfield__input" }, props)
          ),
      props.label &&
        this.state.showFloatingLabel &&
        h(
          "label",
          { className: "mdc-textfield__label mdc-textfield__label" },
          props.label
        )
    );
  }
}
