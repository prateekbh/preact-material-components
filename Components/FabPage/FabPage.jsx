import {h, Component} from 'preact';
import Fab from 'preact-material-components/Fab';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/Fab/style.css';
import './FabPage.css';
export default class FabPage extends Component {
	render(){
		return (
			<div className="page-fab">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">ripple</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds riple effect to the fab</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">plain</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds plain colors to the fab</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">mini</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Shrinks the size of the fab</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<div className="mdc-typography--title">Defaults </div>
				<Fab>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<Fab ripple={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<Fab mini={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<div className="mdc-typography--title">Plain </div>
				<Fab plain={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<Fab plain={true} ripple={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<Fab plain={true} mini={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<div className="mdc-typography--title">Disabled </div>
				<Fab disabled={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<Fab disabled={true} ripple={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
				<Fab disabled={true} mini={true}>
					<Icon icon="favorite_border"></Icon>
				</Fab>
			</div>
		);
	}
}