import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export default class LayoutGrid extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export class LayoutGridInner extends MaterialComponent<JSX.HTMLAttributes, {}> {
  materialDom(props: JSX.HTMLAttributes): VNode;
}

export interface ILayoutGridCellProps extends JSX.HTMLAttributes {
  cols?: number,
  desktopCols?: number,
  tabletCols?: number,
  phoneCols?: number,
  order?: number,
  align?: string
}
export class LayoutGridCell extends MaterialComponent<ILayoutGridCellProps, {}> {
  materialDom(props: ILayoutGridCellProps): VNode;
}