import {h, Component} from 'preact';
import Textfield from 'preact-material-components/Textfield';
import 'preact-material-components/Textfield/style.css';
import './TextfieldPage.css';
export default class TextfieldPage extends Component {
	render(){
		return (
			<div className="page-textfield">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">fullwidth</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes the textfield full width</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">multiline</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Toggles between TextArea and TextField</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
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