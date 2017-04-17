var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
			return h(
				"nav",
				_extends({ ref: control => this.control = control }, props),
				props.children
			);
		}

		return h(
			"ul",
			_extends({}, props, { ref: control => this.control = control }),
			props.children
		);
	}
}

class ListItem extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-item";
	}
	materialDom(props) {
		return h(
			"li",
			_extends({ role: "option" }, props, { ref: control => this.control = control }),
			props.children
		);
	}
}

class LinkItem extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-item";
	}
	componentDidMount() {
		super.attachRipple();
	}
	materialDom(props) {
		return h(
			"a",
			_extends({ role: "option" }, props, { ref: control => this.control = control }),
			props.children
		);
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
	getProxyClassName(props) {
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
		const className = 'material-icons ' + this.getProxyClassName(props);
		return h(
			"i",
			_extends({ className: className, "aria-hidden": "true" }, props, { ref: control => this.control = control }),
			props.children
		);
	}
}

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */
class ListItemAvatar extends ListItemIcon {
	constructor() {
		super();
		this.componentName = "mdc-list-item__avatar";
	}
	materialDom(props) {
		return h("img", _extends({}, props, { "class": super.getProxyClassName(props) }, props, { ref: control => this.control = control,
			width: props.width || '56', height: props.height || '56', alt: props.alt || '' }));
	}
}

class ListDivider extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "list-divider";
		this._mdcProps = ["inset"];
	}
	componentDidMount() {
		super.attachRipple();
	}
	materialDom(props) {
		return h("li", _extends({ role: "separator" }, props, { ref: control => this.control = control }));
	}
}

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
List.Divider = ListDivider;

export default List;