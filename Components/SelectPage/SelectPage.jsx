import {h, Component} from 'preact';
import Select from 'preact-material-components/Select';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';
import './SelectPage.css';
export default class SelectPage extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="page-select">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">disabled</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes the select box disabled</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<div className="mdc-typography--title">Normal </div>
				<Select hintText="Select">
					<Select.Item>Option 1</Select.Item>
					<Select.Item>Option 2</Select.Item>
					<Select.Item>Option 3</Select.Item>
					<Select.Item>Option 4</Select.Item>
				</Select>
				<div className="mdc-typography--title">Disabled </div>
				<Select hintText="Select" disabled={true}>
					<Select.Item>Option 1</Select.Item>
					<Select.Item>Option 2</Select.Item>
					<Select.Item>Option 3</Select.Item>
					<Select.Item>Option 4</Select.Item>
				</Select>
			</div>
		);
	}
}