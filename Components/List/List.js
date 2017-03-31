import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop dense = false
 * @prop two-line = false
 */
class List extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list";
		this._mdcProps = ["dense", "two-line"];
	}
	componentDidMount() {
		super.attachRipple();
	}
	materialDom(props) {
		return (
			<ul class="mdc-list" {...props} ref={control => this.control = control}>
				{props.children}
			</ul>
		);
	}
}

class ListItem extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-item";
	}
	materialDom(props) {
		return (
			<li role="option" {...props} tabindex="0">
				{props.children}
			</li>
		);
	}
}

List.ListItem = ListItem;

export default List;