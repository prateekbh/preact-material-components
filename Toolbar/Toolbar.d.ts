import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IToolbarProps {
  fixed?: boolean;
  'fixed-lastrow-only'?: boolean;
  waterfall?: boolean;
  flexible?: boolean;
  'flexible-default-behavior'?: boolean;
}
export default class Toolbar extends MaterialComponent<IToolbarProps & JSX.HTMLAttributes, {}> {
  static Section: typeof Section;
  static Icon: typeof Icon;
  static Title: typeof Title;
  static Row: typeof Row;
}

declare class Row extends MaterialComponent<{}, {}> {}

declare interface ISectionProps {
  'align-start'?: boolean;
  'align-end'?: boolean;
  'shrink-to-fit'?: boolean;
}
declare class Section extends MaterialComponent<ISectionProps & JSX.HTMLAttributes, {}> {}

declare interface IIconProps {
  menu?: boolean;
}
declare class Icon extends MaterialComponent<IIconProps & JSX.HTMLAttributes, {}> {}

declare interface ITitleProps {
  title?: string;
}
declare class Title extends MaterialComponent<ITitleProps & JSX.HTMLAttributes, {}> {}