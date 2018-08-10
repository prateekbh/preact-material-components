import {MDCTabBar} from '@material/tab-bar';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

/*
 * Default props for tabs
 */
const defaultProps = {
  activeTabIndex: 0
};

export interface ITabLabelProps {}
export interface ITabLabelState {}
export class TabLabel extends MaterialComponent<
  ITabLabelProps,
  ITabLabelState
> {
  protected componentName = 'tab__text-label';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

export interface ITabIconProps {}
export interface ITabIconState {}
export class TabIcon extends MaterialComponent<ITabIconProps, ITabIconState> {
  protected componentName = 'tab__icon';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <span className="material-icons" {...props}>
        {props.children}
      </span>
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

  @autobind
  protected materialDom(props) {
    return (
      <button class="mdc-tab" role="tab" aria-selected="true" {...props}>
        <span class="mdc-tab__content">{props.children}</span>
        <span
          class={`mdc-tab-indicator ${
            props.active ? 'mdc-tab-indicator--active' : ''
          }`}>
          <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
        </span>
        <span class="mdc-tab__ripple" />
      </button>
    );
  }
}

export interface ITabsProps {
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
  public static readonly Tab = Tab;
  public static readonly TabLabel = TabLabel;
  public static readonly TabIcon = TabIcon;

  protected componentName = 'tab-bar';
  protected mdcProps = [];
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
      <div class="mdc-tab-bar" role="tablist" ref={this.setControlRef}>
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">{props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
