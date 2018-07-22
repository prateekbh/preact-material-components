import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

export default class LayoutGrid extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {
  static Cell: typeof LayoutGridCell;
  static Inner: typeof LayoutGridInner;
}

declare class LayoutGridInner extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {}

type PhoneCols = 1 | 2 | 3 | 4;
type TabletCols = PhoneCols | 5 | 6 | 7 | 8;
type LayoutCols = TabletCols | 9 | 10 | 11 | 12;

declare interface ILayoutGridCellProps extends JSX.HTMLAttributes {
  cols?: LayoutCols;
  desktopCols?: LayoutCols;
  tabletCols?: TabletCols;
  phoneCols?: PhoneCols;
  order?: LayoutCols;
  align?: 'top' | 'middle' | 'bottom';
}
declare class LayoutGridCell extends MaterialComponent<
  ILayoutGridCellProps,
  {}
> {}
