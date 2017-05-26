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
import { MDCSimpleMenu } from "@material/menu";
import List from "../List";

/**
 * @prop open = false
 */
class Menu extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "simple-menu";
    this._mdcProps = [
      "open",
      "open-from-top-left",
      "open-from-top-right",
      "open-from-bottom-left",
      "open-from-bottom-right"
    ];
  }
  componentDidMount() {
    this.MDComponent = new MDCSimpleMenu(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy();
  }
  materialDom(props) {
    return h(
      "div",
      _extends({ tabindex: "-1" }, props, {
        ref: control => (this.control = control)
      }),
      h(
        "ul",
        {
          class: "mdc-simple-menu__items mdc-list",
          role: "menu",
          "aria-hidden": "true"
        },
        props.children
      )
    );
  }
}

class MenuAnchor extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "menu-anchor";
  }
}

Menu.Anchor = MenuAnchor;
Menu.Item = List.Item;
export default Menu;
