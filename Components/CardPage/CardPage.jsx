import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Card/style.css';
import './CardPage.css';
export default class CardPage extends Component {
	constructor() {
		super();
		this.propsTable = [
			{
				component: 'Toolbar',
				props: [
					{
						name: 'fixed',
						description: 'Makes the toolbar fixed'
					}
				]
			},
			{
				component: 'Toolbar.Row'
			},
			{
				component: 'Toolbar.Section',
				props: [
					{
						name: 'align-start',
						description: 'Aligns the section to start of the toolbar row'
					},
					{
						name: 'align-end',
						description: 'Aligns the section to end of the toolbar row'
					}
				]
			},
			{
				component: 'Toolbar.Icon'
			},
			{
				component: 'Toolbar.Title'
			}
		];
	}
	render(){
		return (
			<div className="page-toolbar">
				<div className="mdc-typography--display2">Components and their props</div>
				<ComponentTable data={this.propsTable} />
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