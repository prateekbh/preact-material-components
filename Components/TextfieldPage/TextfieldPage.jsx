import {h, Component} from 'preact';
import Textfield from 'preact-material-components/Textfield';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Textfield/style.css';
import './TextfieldPage.css';
export default class TextfieldPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Textfield',
				props: [
					{
						name: 'fullwidth',
						description: 'Makes the textfield full width.'
					},
					{
						name: 'multiline',
						description: 'Toggles between TextArea and TextField.'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-textfield">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Default </div>
				<Textfield label="Your name" onKeyUp={e=>{
					this.setState({
						name: e.target.value
					});
				}}/> Hi - {this.state.name}
				<div className="mdc-typography--title">Multiline </div>
				<Textfield multiline={true} label="Textarea tag"/>
			</div>
		);
	}
}