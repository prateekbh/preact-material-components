import {h, Component} from 'preact';
import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/Radio/style.css';
import './RadioPage.css';
export default class RadioPage extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="page-radio">
				<div className="mdc-typography--display2">Props </div>
				<div className="mdc-typography--body1">none</div>
				<div className="mdc-typography--display2">Demo </div>
				<FormField>
					<Radio id="r1" name='opts'></Radio>
					<label for="r1">Radio 1</label>
				</FormField>
				<FormField>
					<Radio id="r2" name='opts'></Radio>
					<label for="r2">Radio 2</label>
				</FormField>
				<FormField>
					<Radio id="r3" name='opts' disabled={true}></Radio>
					<label for="r3">Disabled Radio </label>
				</FormField>

			</div>
		);
	}
}