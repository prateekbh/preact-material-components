import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IToolbarProps extends JSX.HTMLAttributes {
  fixed?: boolean;
  'fixed-lastrow-only'?: boolean;
  waterfall?: boolean;
  flexible?: boolean;
  'flexible-default-behavior'?: boolean;
}
export default class Toolbar extends MaterialComponent<IToolbarProps, {}> {}

export class Row extends MaterialComponent<{}, {}> {}

export interface ISectionProps extends JSX.HTMLAttributes {
  'align-start'?: boolean;
  'align-end'?: boolean;
  'shrink-to-fit'?: boolean;
}
export class Section extends MaterialComponent<ISectionProps, {}> {}

export interface IIconProps extends JSX.HTMLAttributes {
  menu?: boolean;
}
export class Icon extends MaterialComponent<IIconProps, {}> {}

export interface ITitleProps extends JSX.HTMLAttributes {
  title?: string;
}
export class Title extends MaterialComponent<ITitleProps, {}> {}