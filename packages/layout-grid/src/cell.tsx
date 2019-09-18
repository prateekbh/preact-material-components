import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h, VNode} from 'preact';

export type LayoutGridPhoneCols = 1 | 2 | 3 | 4;
export type LayoutGridTabletCols = LayoutGridPhoneCols | 5 | 6 | 7 | 8;
export type LayoutGridLayoutCols = LayoutGridTabletCols | 9 | 10 | 11 | 12;

export interface ILayoutGridCellProps {
  cols?: LayoutGridLayoutCols;
  desktopCols?: LayoutGridLayoutCols;
  tabletCols?: LayoutGridTabletCols;
  phoneCols?: LayoutGridPhoneCols;
  order?: LayoutGridLayoutCols;
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
      key =>
        // @ts-ignore
        delete (element.props || element.attributes)[
          LayoutGridCell.propsDict[key]
        ]
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
