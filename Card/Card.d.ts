import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import Button from '../Button/Button';

declare class Section<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}

export interface ICardProps extends JSX.HTMLAttributes {
  'theme-dark'?: boolean;
}
export default class Card extends MaterialComponent<ICardProps, {}> {}

export class Primary extends Section<JSX.HTMLAttributes, {}> {}
export class SupportingText extends Section<JSX.HTMLAttributes, {}> {}
export interface IActionsProps extends JSX.HTMLAttributes {
  vertical?: boolean;
}
export class Actions extends Section<IActionsProps, {}> {}
export class Media extends Section<JSX.HTMLAttributes, {}> {}

export class Action extends Button<JSX.HTMLAttributes, {}> {}

export interface ITitleProps extends JSX.HTMLAttributes {
  large?: boolean;
}
export class Title extends MaterialComponent<ITitleProps, {}> {}

export class Subtitle extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class HorizontalBlock extends Section<JSX.HTMLAttributes, {}> {}
export class MediaItem extends MaterialComponent<JSX.HTMLAttributes, {}> {}