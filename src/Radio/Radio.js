import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCRadio } from "../../node_modules/@material/radio/";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Radio extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "radio";
	}
	componentDidMount() {
		this.MDComponent =  MDCRadio.attachTo(this.control);
	}
	materialDom(props) {
		return (
		<div class="mdc-radio" ref={control=>{this.control = control;}}>
			<input class="mdc-radio__native-control" type="radio" {...props} name="radios" />
			<div class="mdc-radio__background">
				<div class="mdc-radio__outer-circle"></div>
				<div class="mdc-radio__inner-circle"></div>
			</div>
		</div>
		);
	}
}
