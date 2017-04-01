import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTextfield } from "@material/textfield/";

/**
 * @prop fullwidth = false
 * @prop multiline = false
 */
export default class Fab extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "textfield";
		this.state = {
			showFloatingLabel: false
		};
		this._mdcProps = ["fullwidth", "multiline"];
	}
	componentDidMount() {
		this.setState({
			showFloatingLabel: true
		});
		this.MDComponent = new MDCTextfield(this.control);
	}
	materialDom(props) {
		return (
			<div ref={control => this.control = control}>
				{
					props.multiline ?
						<textarea class="mdc-textfield__input" {...props}></textarea> :
						<input type="text" class="mdc-textfield__input" {...props}/>
				}
				{
					props.label && this.state.showFloatingLabel &&
					<label class="mdc-textfield__label mdc-textfield__label">
						{props.label}
					</label>
				}
			</div>
		);
	}
}
