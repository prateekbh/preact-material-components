import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IListProps extends JSX.HTMLAttributes {
  dense?: boolean,
  'two-line'?: boolean,
  interactive?: boolean
}
export default class List extends MaterialComponent<IListProps, {}> {
  materialDom(props: IListProps): VNode;
}

export class Item extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export class LinkItem extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export interface IItemIconProps extends JSX.HTMLAttributes {
  'start-detail'?: boolean,
  'end-detail'?: boolean
}
export class ItemIcon extends MaterialComponent<IItemIconProps, {}> {
  getProxyClassName(props: IItemIconProps): string;
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export class ItemAvatar extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export interface IDividerProps extends JSX.HTMLAttributes {
  inset?: boolean
}
export class Divider extends MaterialComponent<IDividerProps, {}> {
  materialDom(props: IDividerProps): VNode;
}

export class TextContainer extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export class PrimaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export class SecondaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}