import {h, Component} from 'preact';
import Switch from 'preact-material-components/Switch';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Switch/style.css';
import './SwitchPage.css';
export default class SwitchPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Switch',
				props: [
					{
						name: 'disabled',
						description: 'Disables the switch.'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-switch">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Default </div>
				<Switch/>
				<div className="mdc-typography--title">Disabled </div>
				<Switch disabled={true}/>
			</div>
		);
	}
}