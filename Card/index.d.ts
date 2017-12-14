import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import Button from '../Button';

declare class Section<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}

declare interface ICardProps extends JSX.HTMLAttributes {
  'theme-dark'?: boolean;
}
export default class Card extends MaterialComponent<ICardProps, {}> {
  static Primary: typeof Primary;
  static SupportingText: typeof SupportingText;
  static Actions: typeof Actions;
  static Action: typeof Action;
  static Media: typeof Media;
  static Title: typeof Title;
  static Subtitle: typeof Subtitle;
  static HorizontalBlock: typeof HorizontalBlock;
  static MediaItem: typeof MediaItem;
}

declare class Primary extends Section<JSX.HTMLAttributes, {}> {}
declare class SupportingText extends Section<JSX.HTMLAttributes, {}> {}
declare interface IActionsProps extends JSX.HTMLAttributes {
  vertical?: boolean;
}
declare class Actions extends Section<IActionsProps, {}> {}
declare class Media extends Section<JSX.HTMLAttributes, {}> {}

declare class Action extends Button<JSX.HTMLAttributes, {}> {}

declare interface ITitleProps extends JSX.HTMLAttributes {
  large?: boolean;
}
declare class Title extends MaterialComponent<ITitleProps, {}> {}

declare class Subtitle extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class HorizontalBlock extends Section<JSX.HTMLAttributes, {}> {}

declare interface IMediaItemProps extends JSX.HTMLAttributes {
  x?: "1dot5"|"2"|"3";
}
declare class MediaItem extends MaterialComponent<IMediaItemProps, {}> {}