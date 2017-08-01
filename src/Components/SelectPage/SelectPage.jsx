import {h, Component} from 'preact';
import Select from 'preact-material-components/Select';
import ComponentTable from '../ComponentTable.jsx';
import EventsTable from '../EventsTable.jsx';
import './SelectPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
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
					},
					{
						name: 'basic',
						description: 'Makes the select box CSS only.'
					}
				]
			},
			{
				component: 'Select.Item',
				props: []
			}
		];
		this.eventsTable = [
			{
				name: 'onChange',
				description: 'Fired when the selection changes on Select box'
			}
		];
	}
	render(){
		return (
			<div className="page-select">
				<ComponentTable data={this.propsTable}/>
				<EventsTable data={this.eventsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-select</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Normal </div>
				<Select hintText="Select">
					<Select.Item>Option 1</Select.Item>
					<Select.Item>Option 2</Select.Item>
					<Select.Item>Option 3</Select.Item>
					<Select.Item>Option 4</Select.Item>
				</Select>

				<div className="mdc-typography--title">Basic </div>
				<Select hintText="Select" basic={true}>
					<option value="" default selected>Pick a food</option>
					<option value="grains">Bread, Cereal, Rice, and Pasta</option>
					<option value="vegetables">Vegetables</option>
					<optgroup label="Fruits">
						<option value="apple">Apple</option>
						<option value="oranges">Orange</option>
						<option value="banana">Banana</option>
					</optgroup>
					<option value="dairy">Milk, Yogurt, and Cheese</option>
					<option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
					<option value="fats">Fats, Oils, and Sweets</option>
				</Select>

				<div className="mdc-typography--title">Disabled </div>
				<Select hintText="Select" disabled={true}>
					<Select.Item>Option 1</Select.Item>
					<Select.Item>Option 2</Select.Item>
					<Select.Item>Option 3</Select.Item>
					<Select.Item>Option 4</Select.Item>
				</Select>

				<div className="mdc-typography--display1">Note </div>
				<div className="mdc-typography--body">
					<div>
						If you are using this component individually, DO NOT FORGET to import
						<i> 'preact-material-components/Menu/style.css'</i> and
						<i> 'preact-material-components/List/style.css'</i>
					</div>
				</div>
			</div>
		);
	}
}