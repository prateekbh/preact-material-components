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

/**
 * @prop fixed = false
 */
class Toolbar extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar";
    this._mdcProps = ["fixed"];
  }
  materialDom(props) {
    return h(
      "header",
      _extends(
        {
          ref: control => {
            this.control = control;
          }
        },
        props
      ),
      props.children
    );
  }
}

class ToolbarRow extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__row";
  }
}

/**
 * @prop align-end = false
 * @prop align-start = false
 */
class ToolbarSection extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__section";
    this._mdcProps = ["align-start", "align-end"];
  }
  materialDom(props) {
    return h("section", props, props.children);
  }
}

class ToolbarIcon extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__icon";
  }
  materialDom(props) {
    return h(
      "a",
      _extends({ className: "material-icons" }, props),
      props.children || "menu"
    );
  }
}

/**
 * @prop title = ''
 */
class ToolbarTitle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__title";
  }
  materialDom(props) {
    return h("span", props, props.children);
  }
}

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;
Toolbar.Row = ToolbarRow;

export default Toolbar;
