import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

class LayoutGrid extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "layout-grid";
	}
	materialDom(props) {
		return (
			<div ref={control=>{this.control = control;}} {...props}>
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
	}
	createClassName(props) {
		const baseClass = "mdc-layout-grid__cell--";
		const classes = [];

		if (props.cols) {
			classes.push(baseClass + "span-" + props.cols) ;
		}

		if (props.desktopCols) {
			classes.push(baseClass + "span-" + props.desktopCols + '-desktop') ;
		}

		if (props.tabletCols) {
			classes.push(baseClass + "span-" + props.tabletCols + '-tablet') ;
		}

		if (props.phoneCols) {
			classes.push(baseClass + "span-" + props.phoneCols + '-phone') ;
		}

		if (props.order) {
			classes.push(baseClass + "order-" + props.order) ;
		}

		if (props.align) {
			classes.push(baseClass + "align-" + props.align) ;
		}

		return classes.join(" ");
	}
	materialDom(props) {
		return (
			<div className={this.createClassName(props)} ref={control=>{this.control = control;}} {...props}>
				{props.children}
			</div>
		);
	}
	render() {
		const element = super.render();
		["cols", "desktopCols", "tabletCols", "phoneCols", "order", "align"].forEach(prop => delete element.attributes[prop]);
		return element;
	}
}

LayoutGrid.Cell = LayoutGridCell;

export default LayoutGrid;
