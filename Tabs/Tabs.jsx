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
    return (
      <nav role="tablist" {...props} ref={control => (this.control = control)}>
        {props.children}
        <span class="mdc-tab-bar__indicator" />
      </nav>
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
    return (
      <a role="tab" {...props} ref={control => (this.control = control)}>
        {props.children}
      </a>
    );
  }
}

class TabIconLabel extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "tab__icon-text";
  }
  materialDom(props) {
    return (
      <span {...props} ref={control => (this.control = control)}>
        {props.children}
      </span>
    );
  }
}

Tabs.Tab = Tab;
Tabs.TabIconLabel = TabIconLabel;
export default Tabs;
