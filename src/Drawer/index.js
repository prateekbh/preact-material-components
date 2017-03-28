import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTemporaryDrawer } from "../../node_modules/@material/drawer/temporary";
import List from "../List/List";

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
			<aside className="mdc-typography" ref={control=>{this.control = control;}}>
				<nav class="mdc-temporary-drawer__drawer">
					<header class="mdc-temporary-drawer__header">
						<div class="mdc-temporary-drawer__header-content">
							Header here
						</div>
					</header>
					<nav id="icon-with-text-demo" class="mdc-temporary-drawer__content mdc-list">
						{props.children}
					</nav>
				</nav>
			</aside>
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
		console.log(returnedNode);
		/* Logic to add selected class */
		if (props.selected) {
			returnedNode.attributes['className'] = 'mdc-temporary-drawer--selected mdc-permanent-drawer--selected';
		}
		return returnedNode;
	}
}

let Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.PermanentDrawer = PermanentDrawer;

export default Drawer;