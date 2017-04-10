var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 */
export default class Button extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "button";
		this._mdcProps = ["dense", "raised", "compact", "primary", "accent"];
	}
	componentDidMount() {
		super.attachRipple();
	}
	materialDom(props) {
		return h(
			"button",
			_extends({
				ref: control => {
					this.control = control;
				}
			}, props),
			this.props.children
		);
	}
}