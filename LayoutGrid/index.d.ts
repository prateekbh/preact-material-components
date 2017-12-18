import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export default class LayoutGrid extends MaterialComponent<JSX.HTMLAttributes, {}> {
  static Cell: typeof LayoutGridCell;
  static Inner: typeof LayoutGridInner;
}

declare class LayoutGridInner extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface ILayoutGridCellProps extends JSX.HTMLAttributes {
  cols?: number;
  desktopCols?: number;
  tabletCols?: number;
  phoneCols?: number;
  order?: number;
  align?: string;
}
declare class LayoutGridCell extends MaterialComponent<ILayoutGridCellProps, {}> {}