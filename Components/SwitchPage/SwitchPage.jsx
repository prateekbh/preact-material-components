import {h, Component} from 'preact';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Switch/style.css';
import './SwitchPage.css';
export default class SwitchPage extends Component {
	render(){
		return (
			<div className="page-switch">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">disabled</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Disables the switch</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<div className="mdc-typography--title">Default </div>
				<Switch/>
				<div className="mdc-typography--title">Disabled </div>
				<Switch disabled={true}/>
			</div>
		);
	}
}