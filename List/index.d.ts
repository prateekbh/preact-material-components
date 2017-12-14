import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IListProps extends JSX.HTMLAttributes {
  dense?: boolean;
  'two-line'?: boolean;
  interactive?: boolean;
}
export default class List extends MaterialComponent<IListProps, {}> {
  static Item: typeof Item;
  static LinkItem: typeof LinkItem;
  static ItemIcon: typeof ItemIcon;
  static ItemAvatar: typeof ItemAvatar;
  static Divider: typeof Divider;
  static TextContainer: typeof TextContainer;
  static PrimaryText: typeof PrimaryText;
  static SecondaryText: typeof SecondaryText;
}

declare class Item extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class LinkItem<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}

declare interface IItemIconProps extends JSX.HTMLAttributes {
  'start-detail'?: boolean;
  'end-detail'?: boolean;
}
declare class ItemIcon extends MaterialComponent<IItemIconProps, {}> {
  getProxyClassName(props: IItemIconProps): string;
}

declare class ItemAvatar extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IDividerProps extends JSX.HTMLAttributes {
  inset?: boolean;
}
declare class Divider extends MaterialComponent<IDividerProps, {}> {}

declare class TextContainer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class PrimaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class SecondaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}