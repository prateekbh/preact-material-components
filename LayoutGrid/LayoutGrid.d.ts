import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export default class LayoutGrid extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export class LayoutGridInner extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface ILayoutGridCellProps extends JSX.HTMLAttributes {
  cols?: number;
  desktopCols?: number;
  tabletCols?: number;
  phoneCols?: number;
  order?: number;
  align?: string;
}
export class LayoutGridCell extends MaterialComponent<ILayoutGridCellProps, {}> {}