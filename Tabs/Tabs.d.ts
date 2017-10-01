import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ITabsProps extends JSX.HTMLAttributes {
  'indicator-accent'?: boolean,
  'icon-tab-bar'?: boolean,
  'icons-with-text'?: boolean,
  'scroller'?: boolean
}
export default class Tabs extends MaterialComponent<ITabsProps, {}> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: ITabsProps): VNode;
}

export class TabBarScroller extends MaterialComponent<JSX.HTMLAttributes, {}> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export interface ITabProps extends JSX.HTMLAttributes {
  active?: boolean
}
export class Tab extends MaterialComponent<ITabProps, {}> {
  materialDom(props: ITabProps): VNode;
}

export class TabIconLabel extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}