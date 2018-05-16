import {MDCTabBar, MDCTabBarScroller} from '@material/tabs';

import MaterialComponent from '../MaterialComponent';
import {h} from 'preact';

/*
 * Default props for tabs
 */
const defaultProps = {
  activeTabIndex: 0
};

/**
 * @prop icon-tab-bar = false
 * @prop icons-with-text = false
 */
class Tabs extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'tab-bar';
    this._mdcProps = ['icon-tab-bar', 'icons-with-text'];
  }
  componentDidMount() {
    this.MDComponent = new MDCTabBar(this.control);
    setActiveTabIndex(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    setActiveTabIndex(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
    return (
      <nav role="tablist" {...props} ref={this.setControlRef}>
        {props.children}
        <span class="mdc-tab-bar__indicator" />
      </nav>
    );
  }
}

class TabBarScroller extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'tab-bar-scroller';
  }
  componentDidMount() {
    this.MDComponent = new MDCTabBarScroller(this.control);
    setActiveTabIndex(defaultProps, this.props, this.MDComponent.tabBar);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    setActiveTabIndex(this.props, nextProps, this.MDComponent.tabBar);
  }
  materialDom(props) {
    return (
      <div {...props} ref={this.setControlRef}>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
          <a
            className="mdc-tab-bar-scroller__indicator__inner material-icons"
            href="#"
            aria-label="scroll back button">
            navigate_before
          </a>
        </div>
        <div className="mdc-tab-bar-scroller__scroll-frame">
          {props.children}
        </div>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
          <a
            className="mdc-tab-bar-scroller__indicator__inner material-icons"
            href="#"
            aria-label="scroll forward button">
            navigate_next
          </a>
        </div>
      </div>
    );
  }
}

/**
 * @prop icon-tab-bar = false
 * @prop icons-with-text = false
 */
class TabBarScrollerTabs extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'tab-bar';
    this._mdcProps = ['icon-tab-bar', 'icons-with-text'];
  }
  materialDom({className, ...props}) {
    return (
      <nav
        role="tablist"
        className="mdc-tab-bar-scroller__scroll-frame__tabs"
        {...props}
        ref={this.setControlRef}>
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
    this.componentName = 'tab';
    this._mdcProps = ['active'];
  }
  materialDom(props) {
    return (
      <a role="tab" {...props} ref={this.setControlRef}>
        {props.children}
      </a>
    );
  }
}

class TabIconLabel extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'tab__icon-text';
  }
  materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

/*
 * Function to add declarative opening/closing to drawer
 */
function setActiveTabIndex(oldprops, newprops, tabs) {
  if (
    'activeTabIndex' in oldprops &&
    'activeTabIndex' in newprops &&
    oldprops.activeTabIndex !== newprops.activeTabIndex
  ) {
    tabs.activeTabIndex = newprops.activeTabIndex;
  }
}

Tabs.TabBarScroller = TabBarScroller;
Tabs.TabBarScrollerTabs = TabBarScrollerTabs;
Tabs.Tab = Tab;
Tabs.TabIconLabel = TabIconLabel;
export default Tabs;
