import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

class LayoutGrid extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "layout-grid";
	}
	materialDom(props) {
		return (
			<div className="mdc-layout-grid" ref={control=>{this.control = control;}} {...props}>
				{props.children}
			</div>
		);
	}
}


/**
 * @prop columns = 0
 * @prop desktop = 0
 * @prop tablet = 0
 * @prop phone = 0
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

		if (props.columns) {
			classes.push(baseClass + "span-" + props.columns) ;
		}

		if (props.desktop) {
			classes.push(baseClass + "span-" + props.desktop + '-desktop') ;
		}

		if (props.tablet) {
			classes.push(baseClass + "span-" + props.tablet + '-tablet') ;
		}

		if (props.phone) {
			classes.push(baseClass + "span-" + props.phone + '-phone') ;
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
		["columns", "desktop", "tablet", "phone", "order", "align"].forEach(prop => delete element.attributes[prop]);
		return element;
	}
}

LayoutGrid.Cell = LayoutGridCell;

export default LayoutGrid;