import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IListProps extends JSX.HTMLAttributes {
  dense?: boolean;
  'two-line'?: boolean;
  interactive?: boolean;
}
export default class List extends MaterialComponent<IListProps, {}> {}

export class Item extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export class LinkItem<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}

export interface IItemIconProps extends JSX.HTMLAttributes {
  'start-detail'?: boolean;
  'end-detail'?: boolean;
}
export class ItemIcon extends MaterialComponent<IItemIconProps, {}> {
  getProxyClassName(props: IItemIconProps): string;
}

export class ItemAvatar extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface IDividerProps extends JSX.HTMLAttributes {
  inset?: boolean;
}
export class Divider extends MaterialComponent<IDividerProps, {}> {}

export class TextContainer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export class PrimaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export class SecondaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}