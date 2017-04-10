var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSelect } from "@material/select/";
import List from "../List";
class Select extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "select";
		this._mdcProps = ["disabled"];
	}
	componentDidMount() {
		this.MDComponent = new MDCSelect(this.control);
		this.MDComponent.listen('MDCSelect:change', () => {
			if (this.props.onChange) {
				this.props.onChange();
			}
		});
	}
	materialDom(props) {
		return h(
			"div",
			_extends({ role: "listbox" }, props, { ref: control => {
					this.control = control;
				} }),
			h(
				"span",
				{ "class": "mdc-select__selected-text" },
				props.hintText
			),
			h(
				"div",
				{ "class": "mdc-simple-menu mdc-select__menu" },
				h(
					"ul",
					{ "class": "mdc-list mdc-simple-menu__items " },
					props.children
				)
			)
		);
	}
}

Select.Item = List.Item;

export default Select;