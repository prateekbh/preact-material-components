import {h, Component} from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/Toolbar/style.css';
import './ToolbarPage.css';
export default class ToolbarPage extends Component {
	render(){
		return (
			<div className="page-toolbar">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">fixed</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes the toolbar fixed</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<div className="mdc-typography--title">Default </div>
				<Toolbar className="toolbar">
						<Toolbar.Row>
							<Toolbar.Section align-start={true}>
								<Toolbar.Icon >menu</Toolbar.Icon>
								<Toolbar.Title>
									Toolbar title
								</Toolbar.Title>
							</Toolbar.Section>
							<Toolbar.Section align-end={true}>
								<Icon>more_vert</Icon>
							</Toolbar.Section>
						</Toolbar.Row>
					</Toolbar>
			</div>
		);
	}
}