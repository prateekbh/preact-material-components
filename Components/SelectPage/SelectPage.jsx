import {h, Component} from 'preact';
import Select from 'preact-material-components/Select';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';
import './SelectPage.css';
export default class SelectPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Select',
				props: [
					{
						name: 'disabled',
						description: 'Makes the select box disabled.'
					}
				]
			},
			{
				component: 'Select.Item',
				props: []
			}
		];
	}
	render(){
		return (
			<div className="page-select">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Demo </div>
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