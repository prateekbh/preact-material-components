import {h, Component} from 'preact';
import Select from 'preact-material-components/Select';
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
						<div className="mdc-typography--headline">dense</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes the list with lesser padding</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">two-line(not implemented yet)</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes container for two line list item</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<Select hintText="Select an option">
					<Select.Item>opt1</Select.Item>
					<Select.Item>opt2</Select.Item>
					<Select.Item>opt3</Select.Item>
					<Select.Item>opt4</Select.Item>
				</Select>
			</div>
		);
	}
}