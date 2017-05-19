import {h, Component} from 'preact';
import Tabs from 'preact-material-components/Tabs';
import Icon from 'preact-material-components/Icon';
import ComponentTable from '../ComponentTable.jsx';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
import './TabsPage.css';
export default class TabsPage
 extends Component {
	constructor() {
		super();
		this.propsTable = [
			{
				component: 'Tabs',
				props: [
					{
						name: 'fixed',
						description: 'Makes the toolbar fixed'
					}
				]
			},
		];
	}
	render(){
		return (
			<div className="page-tabs">
				<ComponentTable data={this.propsTable} />

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-tabs</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Default </div>
					<Tabs className='demo-tabs'>
						<Tabs.Tab>Tab1</Tabs.Tab>
						<Tabs.Tab>Tab2</Tabs.Tab>
						<Tabs.Tab>Tab3</Tabs.Tab>
					</Tabs>
				<div className="mdc-typography--title">With indicator accent </div>
					<Tabs className='demo-tabs' indicator-accent={true}>
						<Tabs.Tab>Tab1</Tabs.Tab>
						<Tabs.Tab>Tab2</Tabs.Tab>
						<Tabs.Tab>Tab3</Tabs.Tab>
					</Tabs>
				<div className="mdc-typography--title">Icons tabs bar </div>
					<Tabs className='demo-tabs' icon-tab-bar={true}>
						<Tabs.Tab>
							<Icon>favorite</Icon>
						</Tabs.Tab>
						<Tabs.Tab>
							<Icon>done</Icon>
						</Tabs.Tab>
						<Tabs.Tab>
							<Icon>info</Icon>
						</Tabs.Tab>
					</Tabs>
				<div className="mdc-typography--title">Icons with test tabs bar </div>
					<Tabs className='demo-tabs' icons-with-text={true}>
						<Tabs.Tab>
							<Icon>favorite</Icon>
							Hello
						</Tabs.Tab>
						<Tabs.Tab active={true}>
							<Icon>done</Icon>
						</Tabs.Tab>
						<Tabs.Tab>
							<Icon>info</Icon>
						</Tabs.Tab>
					</Tabs>
			</div>
		);
	}
}