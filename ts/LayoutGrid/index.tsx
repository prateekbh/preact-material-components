import {h, VNode} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ILayoutGridInnerProps {}

export interface ILayoutGridInnerState {}

export class LayoutGridInner extends MaterialComponent<
  ILayoutGridInnerProps,
  ILayoutGridInnerState
> {
  protected componentName = 'layout-grid__inner';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div ref={this.setControlRef} {...props}>
        {props.children}
      </div>
    );
  }
}

type PhoneCols = 1 | 2 | 3 | 4;
type TabletCols = PhoneCols | 5 | 6 | 7 | 8;
type LayoutCols = TabletCols | 9 | 10 | 11 | 12;

export interface ILayoutGridCellProps {
  cols?: LayoutCols;
  desktopCols?: LayoutCols;
  tabletCols?: TabletCols;
  phoneCols?: PhoneCols;
  order?: LayoutCols;
  align?: 'top' | 'middle' | 'bottom';
}

export interface ILayoutGridCellState {}

export class LayoutGridCell extends MaterialComponent<
  ILayoutGridCellProps,
  ILayoutGridCellState
> {
  protected static readonly propsDict = {
    align: 'align',
    cols: 'cols',
    desktop: 'desktopCols',
    order: 'order',
    phone: 'phoneCols',
    tablet: 'tabletCols'
  };

  protected static createClassName(props) {
    const baseClass = 'mdc-layout-grid__cell--';
    const classes: string[] = [];

    if (props[LayoutGridCell.propsDict.cols]) {
      classes.push(`${baseClass}span-${props[LayoutGridCell.propsDict.cols]}`);
    }

    if (props[LayoutGridCell.propsDict.desktop]) {
      classes.push(
        `${baseClass}span-${props[LayoutGridCell.propsDict.desktop]}-desktop`
      );
    }

    if (props[LayoutGridCell.propsDict.tablet]) {
      classes.push(
        `${baseClass}span-${props[LayoutGridCell.propsDict.tablet]}-tablet`
      );
    }

    if (props[LayoutGridCell.propsDict.phone]) {
      classes.push(
        `${baseClass}span-${props[LayoutGridCell.propsDict.phone]}-phone`
      );
    }

    if (props[LayoutGridCell.propsDict.order]) {
      classes.push(
        `${baseClass}order-${props[LayoutGridCell.propsDict.order]}`
      );
    }

    if (props[LayoutGridCell.propsDict.align]) {
      classes.push(
        `${baseClass}align-${props[LayoutGridCell.propsDict.align]}`
      );
    }

    return classes.join(' ');
  }

  protected componentName = 'layout-grid__cell';
  protected mdcProps = [];

  public render(props): VNode {
    const element = super.render(props);
    // remove the extra attributes used for customising this element - keep the DOM clean
    Object.keys(LayoutGridCell.propsDict).forEach(
      key => delete element.attributes[LayoutGridCell.propsDict[key]]
    );
    return element;
  }

  protected materialDom(props) {
    return (
      <div
        {...props}
        className={LayoutGridCell.createClassName(props)}
        ref={this.setControlRef}>
        {props.children}
      </div>
    );
  }
}

export interface ILayoutGridProps {}

export interface ILayoutGridState {}

export class LayoutGrid extends MaterialComponent<
  ILayoutGridProps,
  ILayoutGridState
> {
  protected componentName = 'layout-grid';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div ref={this.setControlRef} {...props}>
        {props.children}
      </div>
    );
  }
}

export default class extends LayoutGrid {
  public static readonly Cell = LayoutGridCell;
  public static readonly Inner = LayoutGridInner;
}
