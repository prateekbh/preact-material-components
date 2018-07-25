import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';


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
