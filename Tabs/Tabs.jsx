import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTabBar, MDCTabBarScroller } from "@material/tabs";

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
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
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

class TabBarScroller extends Tabs {
  constructor() {
    super();
    this.componentName = "tab-bar-scroller";
  }
  componentDidMount() {
    this.MDComponent = new MDCTabBarScroller(this.control);
  }
  materialDom(props) {
    return (
      <div>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
          <a
            className="mdc-tab-bar-scroller__indicator__inner material-icons"
            href="#"
            aria-label="scroll back button"
          >
            navigate_before
          </a>
        </div>
        <div className="mdc-tab-bar-scroller__scroll-frame">
          <nav
            className="mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs"
            {...props}
            ref={control => (this.control = control)}
          >
            {props.children}
            <span className="mdc-tab-bar__indicator" />
          </nav>
        </div>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
          <a
            className="mdc-tab-bar-scroller__indicator__inner material-icons"
            href="#"
            aria-label="scroll forward button"
          >
            navigate_next
          </a>
        </div>
      </div>
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

Tabs.TabBarScroller = TabBarScroller;
Tabs.Tab = Tab;
Tabs.TabIconLabel = TabIconLabel;
export default Tabs;
