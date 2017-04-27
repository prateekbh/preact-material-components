import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

class LayoutGrid extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "layout-grid";
  }
  materialDom(props) {
    return (
      <div
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        {props.children}
      </div>
    );
  }
}

/**
 * @prop cols = 0
 * @prop desktopCols = 0
 * @prop tabletCols = 0
 * @prop phoneCols = 0
 * @prop order = 0
 * @prop align = ''
 */
class LayoutGridCell extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "layout-grid__cell";
    this._propsDict = {
      cols: "cols",
      desktop: "desktopCols",
      tablet: "tabletCols",
      phone: "phoneCols",
      order: "order",
      align: "align"
    };
  }
  createClassName(props) {
    const baseClass = "mdc-layout-grid__cell--";
    const classes = [];

    if (props[this._propsDict.cols]) {
      classes.push(baseClass + "span-" + props[this._propsDict.cols]);
    }

    if (props[this._propsDict.desktop]) {
      classes.push(
        baseClass + "span-" + props[this._propsDict.desktop] + "-desktop"
      );
    }

    if (props[this._propsDict.tablet]) {
      classes.push(
        baseClass + "span-" + props[this._propsDict.tablet] + "-tablet"
      );
    }

    if (props[this._propsDict.phone]) {
      classes.push(
        baseClass + "span-" + props[this._propsDict.phone] + "-phone"
      );
    }

    if (props[this._propsDict.order]) {
      classes.push(baseClass + "order-" + props[this._propsDict.order]);
    }

    if (props[this._propsDict.align]) {
      classes.push(baseClass + "align-" + props[this._propsDict.align]);
    }

    return classes.join(" ");
  }
  materialDom(props) {
    return (
      <div
        className={this.createClassName(props)}
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        {props.children}
      </div>
    );
  }
  render() {
    const element = super.render();
    // remove the extra attributes used for customising this element - keep the DOM clean
    Object.keys(this._propsDict).forEach(
      key => delete element.attributes[this._propsDict[key]]
    );
    return element;
  }
}

LayoutGrid.Cell = LayoutGridCell;

export default LayoutGrid;
