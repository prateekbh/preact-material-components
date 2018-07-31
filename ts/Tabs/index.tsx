import {MDCTabBar, MDCTabBarScroller} from '@material/tabs';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

/*
 * Default props for tabs
 */
const defaultProps = {
  activeTabIndex: 0
};

export interface IScrollerProps extends JSX.HTMLAttributes {
  activeTabIndex?: number;
}

export interface IScrollerState {}

export class TabBarScroller extends MaterialComponent<
  IScrollerProps,
  IScrollerState
> {
  protected componentName = 'tab-bar-scroller';
  protected mdcProps = [];

  protected MDComponent?: MDCTabBarScroller;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCTabBarScroller(this.control);
      setActiveTabIndex(defaultProps, this.props, this.MDComponent.tabBar);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    if (this.MDComponent) {
      setActiveTabIndex(this.props, nextProps, this.MDComponent.tabBar);
    }
  }

  @autobind
  protected materialDom(props) {
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

export interface IScrollerTabsProps extends JSX.HTMLAttributes {
  'icon-tab-bar'?: boolean;
  'icons-with-text'?: boolean;
}

export interface IScrollerTabsState {}

/**
 * @prop icon-tab-bar = false
 * @prop icons-with-text = false
 */
export class TabBarScrollerTabs extends MaterialComponent<
  IScrollerTabsProps,
  IScrollerTabsState
> {
  protected componentName = 'tab-bar';
  protected mdcProps = ['icon-tab-bar', 'icons-with-text'];

  @autobind
  protected materialDom({className, ...props}) {
    return (
      <nav
        role={'tablist'}
        className="mdc-tab-bar-scroller__scroll-frame__tabs"
        {...props}
        ref={this.setControlRef}>
        {props.children}
        <span class="mdc-tab-bar__indicator" />
      </nav>
    );
  }
}

export interface ITabProps extends JSX.HTMLAttributes {
  active?: boolean;
}

export interface ITabState {}

/**
 * @prop active = false
 */
export class Tab extends MaterialComponent<ITabProps, ITabState> {
  protected componentName = 'tab';
  protected mdcProps = ['active'];

  @autobind
  protected materialDom(props) {
    return (
      <a role="tab" {...props} ref={this.setControlRef}>
        {props.children}
      </a>
    );
  }
}

export interface IIconLabelProps {}

export interface IIconLabelState {}

export class TabIconLabel extends MaterialComponent<
  IIconLabelProps,
  IIconLabelState
> {
  protected componentName = 'tab__icon-text';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

export interface ITabsProps extends JSX.HTMLAttributes {
  'icon-tab-bar'?: boolean;
  'icons-with-text'?: boolean;
  activeTabIndex?: number;
}

export interface ITabsState {}

/*
 * Function to add declarative opening/closing to drawer
 */
function setActiveTabIndex(
  oldprops: ITabsProps,
  newprops: ITabsProps,
  tabs: MDCTabBar
) {
  if (
    oldprops.activeTabIndex &&
    newprops.activeTabIndex &&
    oldprops.activeTabIndex !== newprops.activeTabIndex
  ) {
    tabs.activeTabIndex = newprops.activeTabIndex;
  }
}

/**
 * @prop icon-tab-bar = false
 * @prop icons-with-text = false
 */
export class Tabs extends MaterialComponent<ITabsProps, ITabsState> {
  public static readonly TabBarScroller = TabBarScroller;
  public static readonly TabBarScrollerTabs = TabBarScrollerTabs;
  public static readonly Tab = Tab;
  public static readonly TabIconLabel = TabIconLabel;

  protected componentName = 'tab-bar';
  protected mdcProps = ['icon-tab-bar', 'icons-with-text'];
  protected MDComponent?: MDCTabBar;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCTabBar(this.control);
      setActiveTabIndex(defaultProps, this.props, this.MDComponent);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    if (this.MDComponent) {
      setActiveTabIndex(this.props, nextProps, this.MDComponent);
    }
  }

  @autobind
  protected materialDom(props) {
    return (
      <nav role={'tablist'} {...props} ref={this.setControlRef}>
        {props.children}
        <span class="mdc-tab-bar__indicator" />
      </nav>
    );
  }
}

export default Tabs;
