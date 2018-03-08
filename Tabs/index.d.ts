import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent} from '../MaterialComponentsWeb';

declare interface ITabsProps extends JSX.HTMLAttributes {
  'indicator-accent'?: boolean;
  'icon-tab-bar'?: boolean;
  'icons-with-text'?: boolean;
  scroller?: boolean;
}
export default class Tabs extends MaterialComponent<ITabsProps, {}> {
  static TabBarScroller: typeof TabBarScroller;
  static Tab: typeof Tab;
  static TabIconLabel: typeof TabIconLabel;

  MDComponent: MDCTabBar;
}

declare class TabBarScroller extends MaterialComponent<JSX.HTMLAttributes, {}> {
  MDComponent: MDCTabBarScroller;
}

interface ITabProps extends JSX.HTMLAttributes {
  active?: boolean;
}
declare class Tab extends MaterialComponent<ITabProps, {}> {}

declare class TabIconLabel extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class MDCTabFoundation extends MDCFoundation<MDCTab> {
  getComputedWidth(): number;
  getComputedLeft(): number;
  isActive(): boolean;
  setActive(isActive: boolean): void;
  preventsDefaultOnClick(): boolean;
  setPreventDefaultOnClick(preventDefaultOnClick: boolean): void;
  measureSelf(): void;
}
declare class MDCTab extends MDCComponent<MDCTabFoundation> {
  computedWidth: number;
  computedLeft: number;
  isActive: boolean;
  preventDefaultOnClick: boolean;
  measureSelf(): void;
}

declare class MDCTabBarFoundation extends MDCFoundation<MDCTabBar> {
  layout(): void;
  switchToTabAtIndex(index: number, shouldNotify?: boolean): void;
  getActiveTabIndex(): number;
}
declare class MDCTabBar extends MDCComponent<MDCTabBarFoundation> {
  tabs: MDCTab[];
  activeTab: MDCTab;
  activeTabIndex: number;
  layout(): void;
}

declare class MDCTabBarScrollerFoundation extends MDCFoundation<
  MDCTabBarScroller
> {
  scrollBack(evt?: Event): void;
  scrollForward(evt?: Event): void;
  layout(): void;
  scrollToTabAtIndex(index: number): void;
}
declare class MDCTabBarScroller extends MDCComponent<
  MDCTabBarScrollerFoundation
> {
  tabBar: MDCTabBar;
  layout(): void;
}
