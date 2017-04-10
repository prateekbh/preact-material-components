import {h, Component} from 'preact';
import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/Radio/style.css';
import './FormfieldPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class FormfieldPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Formfield',
				props: []
			}
		];
	}
	render(){
		return (
			<div className="page-radio">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Demo </div>
				<FormField>
					<Radio id="r1" name='opts'></Radio>
					<label for="r1">Radio 1</label>
				</FormField>

			</div>
		);
	}
}