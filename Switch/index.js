var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop disabled = false
 */
export default class Switch extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "switch";
		this._mdcProps = ["disabled"];
	}
	materialDom(allprops) {
		const { className } = allprops,
		      props = _objectWithoutProperties(allprops, ["className"]);
		return h(
			"div",
			{ className: className + '' },
			h("input", _extends({ type: "checkbox", id: "basic-switch", className: "mdc-switch__native-control" }, props)),
			h(
				"div",
				{ className: "mdc-switch__background" },
				h("div", { className: "mdc-switch__knob" })
			)
		);
	}
}