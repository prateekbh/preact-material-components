import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTemporaryDrawer } from "@material/drawer/temporary";
import List from "../List";

class TemporaryDrawer extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "temporary-drawer";
	}
	componentDidMount() {
		this.MDComponent = MDCTemporaryDrawer.attachTo(this.control);
	}
	materialDom(props) {
		return (
			<aside className="mdc-typography" ref={control=>{this.control = control;}} {...props}>
				<nav class="mdc-temporary-drawer__drawer">
					{props.children}
				</nav>
			</aside>
		);
	}
}

class TemporarytDrawerHeader extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "temporary-drawer__header";
	}
	materialDom(props) {
		return (
			<header class="mdc-temporary-drawer__header" ref={control=>{this.control = control;}} {...props}>
				<div class="mdc-temporary-drawer__header-content">
					{props.children}
				</div>
			</header>
		);
	}
}

class TemporarytDrawerContent extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "mdc-temporary-drawer__content";
	}
	materialDom(props) {
		return (
			<nav id="icon-with-text-demo" className="mdc-list" ref={control=>{this.control = control;}} {...props}>
				{props.children}
			</nav>
		);
	}
}

/**
 * @prop spacer = false
 */
class PermanentDrawer extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "permanent-drawer";
	}
	materialDom(props) {
		return (
			<nav className="mdc-typography">
				{props.spacer && <div class="mdc-permanent-drawer__toolbar-spacer"></div>}
				<div class="mdc-permanent-drawer__content">
					<nav id="icon-with-text-demo" class="mdc-list">
						{props.children}
					</nav>
				</div>
			</nav>
		);
	}
}

/**
 * @prop selected = false
 */
class DrawerItem extends List.LinkItem {
	constructor() {
		super();
	}
	materialDom(props){
		const returnedNode = super.materialDom(props);
		/* Logic to add selected class */
		if (props.selected) {
			returnedNode.attributes['className'] = 'mdc-temporary-drawer--selected mdc-permanent-drawer--selected';
		}
		return returnedNode;
	}
}

let Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporarytDrawerHeader = TemporarytDrawerHeader;
Drawer.TemporarytDrawerContent = TemporarytDrawerContent;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.PermanentDrawer = PermanentDrawer;

export default Drawer;