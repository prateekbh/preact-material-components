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
	getClassName(props){
		let classNames = [];

		// default behavior
		props['start-detail'] = props['start-detail'] || true;

		// setting class names mutually exclusive
		if (props['end-detail']) {
			classNames.push('mdc-list-item__end-detail');
		} else if (props['start-detail']) {
			classNames.push('mdc-list-item__start-detail');
		}
		return classNames.join(' ');
	}
	materialDom(props) {
		return (<i className={'material-icons ' + this.getClassName(props)} aria-hidden="true" {...props} ref={control => this.control = control}>
			{props.children}
		</i>);
	}
}

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */
class ListItemAvatar extends ListItemAvatar {
	constructor() {
		super();
		this.componentName = "mdc-list-item__avatar";
	}
	materialDom(props) {
		return (<img {...props} class={super.getClassName(props)} {...props} ref={control => this.control = control}
			width={props.width || '56'} height={props.height || '56'} alt={props.alt || ''} />);
	}
}

class ListDivider extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-divider";
		this._mdcProps = ["inset"];
	}
	componentDidMount(){
		super.attachRipple();
	}
	materialDom(props) {
		return (<li role="separator" {...props} ref={control => this.control = control}></li>);
	}
}

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
List.Divider = ListDivider;

export default List;