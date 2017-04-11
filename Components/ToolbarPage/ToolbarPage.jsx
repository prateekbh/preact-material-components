import {h, Component} from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import Icon from 'preact-material-components/Icon';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Toolbar/style.css';
import './ToolbarPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class ToolbarPage extends Component {
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
				component: 'Toolbar.Row',
				props: []
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
				component: 'Toolbar.Icon',
				props: []
			},
			{
				component: 'Toolbar.Title',
				props: []
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

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-toolbar</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Default </div>
					<Toolbar className="toolbar">
						<Toolbar.Row>
							<Toolbar.Section align-start={true}>
								<Toolbar.Icon >menu</Toolbar.Icon>
								<Toolbar.Title>
									My App
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