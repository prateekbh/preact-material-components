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
			<div {...props}>
				<input type="checkbox" id="basic-switch" class="mdc-switch__native-control" disabled={props.disabled} />
				<div class="mdc-switch__background">
					<div class="mdc-switch__knob"></div>
				</div>
			</div>
		);
	}
}
