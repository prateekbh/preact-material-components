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
	materialDom(props) {
		return (
			<div>
				<input type="checkbox" id="basic-switch" className="mdc-switch__native-control" {...props} />
				<div className="mdc-switch__background">
					<div className="mdc-switch__knob"></div>
				</div>
			</div>
		);
	}
}
