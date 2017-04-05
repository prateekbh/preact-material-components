import {h, Component} from 'preact';
import Elevation from 'preact-material-components/Elevation';
import 'preact-material-components/Elevation/style.css';
import './ElevationPage.css';
export default class ElevationPage extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="page-elevation">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">z1..z25</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds height effect to the container</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<Elevation z0={true}>Z0</Elevation>
				<Elevation z1={true}>Z1</Elevation>
				<Elevation z2={true}>Z2</Elevation>
				<Elevation z3={true}>Z3</Elevation>
				<Elevation z4={true}>Z4</Elevation>
			</div>
		);
	}
}