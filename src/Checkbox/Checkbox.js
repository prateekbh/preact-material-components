import {h, Component} from 'preact';
import {checkbox} from 'material-components-web';

export default class Checkbox extends Component {
	constructor(){
		super();
		this.componentName='checkbox';
	}
	render() {

		return(
			<div class="mdc-form-field">
				<div class="mdc-checkbox">
					<input type="checkbox"
						id="my-checkbox"
						class="mdc-checkbox__native-control"/>
					<div class="mdc-checkbox__background">
					<svg version="1.1"
						class="mdc-checkbox__checkmark"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						>
						<path class="mdc-checkbox__checkmark__path"
							fill="none"
							stroke="white"
							d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
					</svg>
					<div class="mdc-checkbox__mixedmark"></div>
					</div>
				</div>

				<label for="my-checkbox" {...this.props}>My Checkbox Label</label>
			</div>
		);
	}
}