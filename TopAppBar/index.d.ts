import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface ITopAppBarProps extends JSX.HTMLAttributes {
  short?: boolean;
  'short-collapsed'?: boolean;
}
export default class TopAppBar extends MaterialComponent<ITopAppBarProps, {}> {
  static Section: typeof Section;
  static Icon: typeof Icon;
  static Title: typeof Title;
  static Row: typeof Row;
}

declare class Row extends MaterialComponent<{}, {}> {}

declare interface ISectionProps extends JSX.HTMLAttributes {
  'align-start'?: boolean;
  'align-end'?: boolean;
}
declare class Section extends MaterialComponent<ISectionProps, {}> {}

declare interface IIconProps extends JSX.HTMLAttributes {
  navigation?: boolean;
}
declare class Icon extends MaterialComponent<IIconProps, {}> {}

declare class Title extends MaterialComponent<JSX.HTMLAttributes, {}> {}
