import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IListProps {
  dense?: boolean;
  'two-line'?: boolean;
  interactive?: boolean;
}
export default class List extends MaterialComponent<IListProps & JSX.HTMLAttributes, {}> {
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

declare interface IItemIconProps {
  'start-detail'?: boolean;
  'end-detail'?: boolean;
}
declare class ItemIcon extends MaterialComponent<IItemIconProps & JSX.HTMLAttributes, {}> {
  getProxyClassName(props: IItemIconProps & JSX.HTMLAttributes): string;
}

declare class ItemAvatar extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IDividerProps {
  inset?: boolean;
}
declare class Divider extends MaterialComponent<IDividerProps & JSX.HTMLAttributes, {}> {}

declare class TextContainer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class PrimaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class SecondaryText extends MaterialComponent<JSX.HTMLAttributes, {}> {}