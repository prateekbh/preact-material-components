import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */
class List extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list";
		this._mdcProps = ["dense", "two-line"];
	}
	materialDom(props) {
		if (props.interactive) {
			return (<nav ref={control => this.control = control} {...props}>
				{props.children}
			</nav>);
		}

		return (<ul {...props} ref={control => this.control = control}>
			{props.children}
		</ul>);
	}
}

class ListItem extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-item";
	}
	materialDom(props) {
		return (<li role="option" {...props} ref={control => this.control = control}>
				{props.children}
			</li>);
	}
}

class LinkItem extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-item";
	}
	componentDidMount(){
		super.attachRipple();
	}
	materialDom(props) {
		return (<a role="option" {...props} ref={control => this.control = control}>
				{props.children}
			</a>);
	}
}

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */
class ListItemIcon extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "mdc-list-item__icon";
	}
	materialDom(props) {
		let className = 'material-icons ';
		// default behavior
		props['start-detail'] = props['start-detail'] || true;

		// setting class names mutually exclusive
		if (props['end-detail']) {
			className += 'mdc-list-item__end-detail';
		} else if (props['start-detail']) {
			className += 'mdc-list-item__start-detail';
		}
		return (<i className={className} aria-hidden="true" {...props}>
			{props.children}
		</i>);
	}
}

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;

export default List;