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
import { MDCTabBar } from "@material/tabs";
import List from "../List";

/**
 * @prop indicator-accent = false
 * @prop icon-tab-bar = false
 */
class Tabs extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "tab-bar";
    this._mdcProps = ["indicator-accent", "icon-tab-bar", "icons-with-text"];
  }
  componentDidMount() {
    this.MDComponent = new MDCTabBar(this.control);
  }
  materialDom(props) {
    return h(
      "nav",
      _extends({ role: "tablist" }, props, {
        ref: control => (this.control = control)
      }),
      props.children,
      h("span", { class: "mdc-tab-bar__indicator" })
    );
  }
}

/**
 * @prop active = false
 */
class Tab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "tab";
    this._mdcProps = ["active"];
  }
  materialDom(props) {
    return h(
      "a",
      _extends({ role: "tab" }, props, {
        ref: control => (this.control = control)
      }),
      props.children
    );
  }
}

class TabIconLabel extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "tab__icon-text";
  }
  materialDom(props) {
    return h(
      "span",
      _extends({}, props, { ref: control => (this.control = control) }),
      props.children
    );
  }
}

Tabs.Tab = Tab;
Tabs.TabIconLabel = TabIconLabel;
export default Tabs;
