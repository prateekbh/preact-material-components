import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTextfield } from "../../node_modules/@material/textfield/";

export default class Fab extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "textfield";
		this.state = {
			showFloatingLabel: false
		};
	}
	componentDidMount() {
		this.setState({
			showFloatingLabel: true
		});
		this.MDComponent = new MDCTextfield(this.control);
	}
	materialDom(props) {
		return (
			<div class="mdc-textfield" ref={control => this.control = control}>
				<input
					type="text"
					class="mdc-textfield__input"
					{...props}
				/>
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
