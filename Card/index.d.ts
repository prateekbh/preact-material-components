import Button from '../Button';
import Icon from '../Icon';
import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare class Section<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}

declare interface ICardProps extends JSX.HTMLAttributes {
  'stroked'?: boolean;
}
export default class Card extends MaterialComponent<ICardProps, {}> {
  static Actions: typeof Actions;
  static ActionButton: typeof ActionButton;
  static ActionIcon: typeof ActionIcon;
  static Media: typeof Media;
}

declare class Primary extends Section<JSX.HTMLAttributes, {}> {}
declare class SupportingText extends Section<JSX.HTMLAttributes, {}> {}
declare interface IActionsProps extends JSX.HTMLAttributes {
  "full-bleed"?: boolean;
}
declare class Actions extends Section<IActionsProps, {}> {}
declare class ActionButton extends Button<JSX.HTMLAttributes, {}> {}
declare class ActionIcon extends Icon<JSX.HTMLAttributes, {}> {}

declare class Subtitle extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class HorizontalBlock extends Section<JSX.HTMLAttributes, {}> {}

declare interface IMediProps extends JSX.HTMLAttributes {
  x?: "square"|"16-9";
}
declare class Media extends MaterialComponent<IMediProps, {}> {}