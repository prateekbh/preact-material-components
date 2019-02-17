import {MDCTabBar, MDCTabBarScroller} from '@material/tabs';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

/*
 * Default props for tabs
 */
const defaultProps = {
  activeTabIndex: 0
};

export interface ITabBarScrollerProps {
  activeTabIndex?: number;
}

export interface ITabBarScrollerState {}

export class TabBarScroller extends MaterialComponent<
  ITabBarScrollerProps,
  ITabBarScrollerState
> {
  public MDComponent?: MDCTabBarScroller;
  protected componentName = 'tab-bar-scroller';
  protected mdcProps = [];

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

  public componentWillReceiveProps(nextProps: ITabBarScrollerProps) {
    super.componentWillReceiveProps(nextProps);
    if (this.MDComponent) {
      setActiveTabIndex(this.props, nextProps, this.MDComponent.tabBar);
    }
  }

  @bind
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

export interface ITabBarScrollerTabsProps {
  'icon-tab-bar'?: boolean;
  'icons-with-text'?: boolean;
}

export interface ITabBarScrollerTabsState {}

export class TabBarScrollerTabs extends MaterialComponent<
  ITabBarScrollerTabsProps,
  ITabBarScrollerTabsState
> {
  protected componentName = 'tab-bar';
  protected mdcProps = ['icon-tab-bar', 'icons-with-text'];

  @bind
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

export interface ITabProps {
  active?: boolean;
}

export interface ITabState {}

export class Tab extends MaterialComponent<ITabProps, ITabState> {
  protected componentName = 'tab';
  protected mdcProps = ['active'];

  @bind
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

  @bind
  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

export interface ITabsProps {
  'icon-tab-bar'?: boolean;
  'icons-with-text'?: boolean;
  activeTabIndex?: number; // TODO: Fix type in docs
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

export class Tabs extends MaterialComponent<ITabsProps, ITabsState> {
  public static readonly TabBarScroller = TabBarScroller;
  public static readonly TabBarScrollerTabs = TabBarScrollerTabs;
  public static readonly Tab = Tab;
  public static readonly TabIconLabel = TabIconLabel;
  public MDComponent?: MDCTabBar;

  protected componentName = 'tab-bar';
  protected mdcProps = ['icon-tab-bar', 'icons-with-text'];
  protected mdcNotifyProps = ['activeTabIndex'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCTabBar(this.control);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  @bind
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
