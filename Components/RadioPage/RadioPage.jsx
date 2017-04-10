import {h, Component} from 'preact';
import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/Radio/style.css';
import './RadioPage.css';
export default class RadioPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Radio',
				props: []
			}
		];
	}
	render(){
		return (
			<div className="page-radio">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Demo </div>
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