import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop disabled = false
 */
export default class Switch extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "switch";
	}
	materialDom(props) {
		return (
			<div class="mdc-switch" {...props}>
				<input type="checkbox" id="basic-switch" class="mdc-switch__native-control" />
				<div class="mdc-switch__background">
					<div class="mdc-switch__knob"></div>
				</div>
			</div>
		);
	}
}
