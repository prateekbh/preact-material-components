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
			return (<nav ref={control => this.control = control}>
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

List.ListItem = ListItem;
List.LinkItem = LinkItem;

export default List;