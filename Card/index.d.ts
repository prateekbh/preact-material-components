import Button from '../Button';
import Icon from '../Icon';
import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface ICardProps extends JSX.HTMLAttributes {
  stroked?: boolean;
}
export default class Card extends MaterialComponent<ICardProps, {}> {
  static Actions: typeof Actions;
  static ActionButton: typeof ActionButton;
  static ActionIcon: typeof ActionIcon;
  static Media: typeof Media;
  static CardMediaContent: typeof CardMediaContent;
}

declare interface IActionsProps extends JSX.HTMLAttributes {
  'full-bleed'?: boolean;
}

declare class Actions extends MaterialComponent<IActionsProps, {}> {}
declare class ActionButton extends Button<JSX.HTMLAttributes, {}> {}
declare class ActionIcon extends Icon<JSX.HTMLAttributes, {}> {}
declare class CardMediaContent extends MaterialComponent<IActionsProps, {}> {}

declare interface IMediaProps extends JSX.HTMLAttributes {
  x?: 'square' | '16-9';
}
declare class Media extends MaterialComponent<IMediaProps, {}> {}
