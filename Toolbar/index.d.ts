import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IToolbarProps extends JSX.HTMLAttributes {
  fixed?: boolean;
  'fixed-lastrow-only'?: boolean;
  waterfall?: boolean;
  flexible?: boolean;
  'flexible-default-behavior'?: boolean;
}
export default class Toolbar extends MaterialComponent<IToolbarProps, {}> {
  static Section: typeof Section;
  static Icon: typeof Icon;
  static Title: typeof Title;
  static Row: typeof Row;
}

declare class Row extends MaterialComponent<{}, {}> {}

declare interface ISectionProps extends JSX.HTMLAttributes {
  'align-start'?: boolean;
  'align-end'?: boolean;
  'shrink-to-fit'?: boolean;
}
declare class Section extends MaterialComponent<ISectionProps, {}> {}

declare interface IIconProps extends JSX.HTMLAttributes {
  menu?: boolean;
}
declare class Icon extends MaterialComponent<IIconProps, {}> {}

declare interface ITitleProps extends JSX.HTMLAttributes {
  title?: string;
}
declare class Title extends MaterialComponent<ITitleProps, {}> {}
