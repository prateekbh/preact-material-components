var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSnackbar } from "@material/snackbar/";
/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Snackbar extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "snackbar";
	}
	componentDidMount() {
		this.MDComponent = MDCSnackbar.attachTo(this.control);
	}

	materialDom(props) {
		return h(
			"div",
			_extends({
				"aria-live": "assertive",
				"aria-atomic": "true",
				"aria-hidden": "true",
				ref: control => this.control = control }, props),
			h("div", { className: "mdc-snackbar__text" }),
			h(
				"div",
				{ className: "mdc-snackbar__action-wrapper" },
				h("button", {
					type: "button",
					className: "mdc-button mdc-snackbar__action-button"
				})
			)
		);
	}
}