import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCIconToggle } from "mdc-icon-toggle";

/**
 * @prop disabled = false
 */
export default class IconToggle extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "icon-toggle";
	}
	componentDidMount() {
		this.MDComponent = MDCIconToggle.attachTo(this.control);
	}
	materialDom(props) {
		return (
			<i
				{...props}
				ref={control => {
					this.control = control;
				}}
				class="mdc-icon-toggle material-icons"
				role="button"
			>
				favorite_border
			</i>
		);
	}
}
