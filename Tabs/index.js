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
import { MDCTabBar, MDCTabBarScroller } from "@material/tabs";

/**
 * @prop indicator-accent = false
 * @prop icon-tab-bar = false
 * @prop icons-with-text = false
 * @prop scroller = false
 */
class Tabs extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "tab-bar";
    this._mdcProps = [
      "indicator-accent",
      "icon-tab-bar",
      "icons-with-text",
      "scroller"
    ];
  }
  componentDidMount() {
    this.MDComponent = new MDCTabBar(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(props) {
    let className = "";
    if (props.scroller) {
      className = "mdc-tab-bar-scroller__scroll-frame__tabs";
    }
    return h(
      "nav",
      _extends({ className: className, role: "tablist" }, props, {
        ref: control => (this.control = control)
      }),
      props.children,
      h("span", { class: "mdc-tab-bar__indicator" })
    );
  }
}

class TabBarScroller extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "tab-bar-scroller";
  }
  componentDidMount() {
    this.MDComponent = new MDCTabBarScroller(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(props) {
    return h(
      "div",
      _extends({}, props, { ref: control => (this.control = control) }),
      h(
        "div",
        {
          className: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back"
        },
        h(
          "a",
          {
            className: "mdc-tab-bar-scroller__indicator__inner material-icons",
            href: "#",
            "aria-label": "scroll back button"
          },
          "navigate_before"
        )
      ),
      h(
        "div",
        { className: "mdc-tab-bar-scroller__scroll-frame" },
        props.children
      ),
      h(
        "div",
        {
          className: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward"
        },
        h(
          "a",
          {
            className: "mdc-tab-bar-scroller__indicator__inner material-icons",
            href: "#",
            "aria-label": "scroll forward button"
          },
          "navigate_next"
        )
      )
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

Tabs.TabBarScroller = TabBarScroller;
Tabs.Tab = Tab;
Tabs.TabIconLabel = TabIconLabel;
export default Tabs;
