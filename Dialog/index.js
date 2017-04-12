var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCDialog } from "@material/dialog/";
import Button from "../Button";
/**
 */
class Dialog extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog";
	}
	componentDidMount() {
		this.MDComponent = new MDCDialog(this.control);
	}
	materialDom(props) {
		return h(
			"aside",
			_extends({
				role: "alertdialog",
				"aria-hidden": "true",
				ref: control => {
					this.control = control;
				}
			}, props),
			h(
				"div",
				{ className: "mdc-dialog__surface" },
				props.children
			),
			h("div", { className: "mdc-dialog__backdrop" })
		);
	}
}

class DialogHeader extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog__header";
	}
	materialDom(props) {
		return h(
			"header",
			props,
			h(
				"h2",
				{ className: "mdc-dialog__header__title" },
				props.children
			)
		);
	}
}

/**
 * @prop scrollable = false
 */
class DialogBody extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog__body";
		this._mdcProps = ["scrollable"];
	}
	materialDom(props) {
		return h(
			"section",
			props,
			props.children
		);
	}
}

class DialogFooter extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog__footer";
	}
	materialDom(props) {
		return h(
			"footer",
			props,
			props.children
		);
	}
}

/**
 * @prop cancel = false
 * @prop accept = false
 */
class DialogFooterButton extends Button {
	constructor() {
		super();
		this.componentName = "dialog__footer__button";
		this._mdcProps = ["cancel", "accept"];
	}
	materialDom(props) {
		return h(
			"button",
			_extends({}, props, { className: "mdc-button", ref: control => {
					this.control = control;
				} }),
			props.children
		);
	}
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

export default Dialog;