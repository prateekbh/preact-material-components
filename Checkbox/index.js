import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCCheckbox } from "@material/checkbox/";

/**
 */
export default class Checkbox extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "checkbox";
	}
	componentDidMount() {
		this.MDComponent = new MDCCheckbox(this.control);
	}
	materialDom(props) {
		return (
				<div class="mdc-checkbox" ref={control=>{this.control = control;}}>
					<input
						type="checkbox"
						class="mdc-checkbox__native-control"
						{...props}
					/>
					<div class="mdc-checkbox__background">
						<svg
							version="1.1"
							class="mdc-checkbox__checkmark"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								class="mdc-checkbox__checkmark__path"
								fill="none"
								stroke="white"
								d="M1.73,12.91 8.1,19.28 22.79,4.59"
							/>
						</svg>
						<div class="mdc-checkbox__mixedmark" />
					</div>
				</div>
		);
	}
}
