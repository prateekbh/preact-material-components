import {h, Component} from 'preact';
import Drawer from 'preact-material-components/Drawer';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Drawer/style.css';
import './DrawerPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class DrawerPage extends Component {
	constructor() {
		super();
		this.propsTable = [
			{
				component: 'Drawer.TemporaryDrawer',
				props: []
			},
			{
				component: 'Drawer.TemporaryDrawerHeader',
				props: []
			},
			{
				component: 'Drawer.TemporaryDrawerContent',
				props: []
			},
			{
				component: 'Drawer.DrawerItem',
				props: [
					{
						name: 'selected',
						description: 'Tells if the drawer item is selected.'
					}
				]
			},
			{
				component: 'Drawer.PermanentDrawer',
				props: [
					{
						name: 'spacer',
						description: 'Teels if the tollbar height equivalent spacer is required.'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-toolbar">
				<ComponentTable data={this.propsTable} />

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">not available </div>

			</div>
		);
	}
}