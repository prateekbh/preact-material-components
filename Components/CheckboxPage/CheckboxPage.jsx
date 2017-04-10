import {h, Component} from 'preact';
import Checkbox from 'preact-material-components/Checkbox';
import Button from 'preact-material-components/Button';
import FormField from 'preact-material-components/FormField';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Checkbox/style.css';
import './CheckboxPage.css';
export default class CheckboxPage extends Component {
	constructor() {
		super();
		this.propsTable = [
			{
				component: 'Checkbox',
				props: [
				]
			}
		];
	}
	render(){
		return (
			<div className="page-checkbox">
				<ComponentTable data={this.propsTable}/>
				<div className="mdc-typography--display1">Demo </div>
				<FormField>
					<Checkbox id="basic-checkbox-label" ref={cb=>{this.cb=cb;}}/>
					<label for="basic-checkbox" id="basic-checkbox-label">This is my checkbox</label>
				</FormField>
				<Button raised={true} onClick={()=>{
						this.cb.MDComponent.indeterminate = true;
					}}>Make indeterminate</Button>
			</div>
		);
	}
}