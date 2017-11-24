import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ITabsProps extends JSX.HTMLAttributes {
  'indicator-accent'?: boolean;
  'icon-tab-bar'?: boolean;
  'icons-with-text'?: boolean;
  'scroller'?: boolean;
}
export default class Tabs extends MaterialComponent<ITabsProps, {}> {}

export class TabBarScroller extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface ITabProps extends JSX.HTMLAttributes {
  active?: boolean;
}
export class Tab extends MaterialComponent<ITabProps, {}> {}

export class TabIconLabel extends MaterialComponent<JSX.HTMLAttributes, {}> {}