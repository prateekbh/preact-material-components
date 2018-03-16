import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IListProps extends JSX.HTMLAttributes {
  dense?: boolean;
  'two-line'?: boolean;
  'avatar-list'?: boolean;
}
export default class List extends MaterialComponent<IListProps, {}> {
  static Item: typeof Item;
  static LinkItem: typeof LinkItem;
  static ItemGraphic: typeof ItemGraphic;
  static ItemMeta: typeof ItemMeta;
  static Divider: typeof Divider;
  static TextContainer: typeof TextContainer;
  static PrimaryText: typeof PrimaryText;
  static SecondaryText: typeof SecondaryText;
  static Group: typeof Group;
  static GroupHeader: typeof GroupHeader;
}

declare class Item extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class LinkItem<
  PropsType = {},
  StateType = {}
> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}

declare class ItemGraphic extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class ItemMeta extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IDividerProps extends JSX.HTMLAttributes {
  inset?: boolean;
}
declare class Divider extends MaterialComponent<IDividerProps, {}> {}

declare class TextContainer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class PrimaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class SecondaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class Group extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class GroupHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
