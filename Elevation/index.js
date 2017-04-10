var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Elevation extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "elevation";
		this._mdcProps = [];
		for (let elevationIndex = 0; elevationIndex < 25; elevationIndex++) {
			this._mdcProps.push("z" + elevationIndex);
		}
	}
	materialDom(props) {
		return h(
			"p",
			_extends({}, props, { ref: control => this.control = control }),
			props.children
		);
	}
}