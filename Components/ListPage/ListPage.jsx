import {h, Component} from 'preact';
import List from 'preact-material-components/List';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/List/style.css';
import './ListPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class ListPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'List',
				props: [
					{
						name: 'dense',
						description: 'Makes the list with lesser padding.'
					},
					{
						name: 'two-line',
						description: 'Makes container for two line list item.'
					}
				]
			},
			{
				component: 'List.Item',
				props: []
			},
			{
				component: 'List.LinkItem',
				props: []
			},
			{
				component: 'List.LinkItem',
				props: [
					{
						name: 'align-start',
						description: 'Makes the Icon align to start.'
					},
					{
						name: 'align-end',
						description: 'Makes the Icon align to end.'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-list">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-list</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-list"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<List>
					<List.Item>Item1</List.Item>
					<List.Item>Item2</List.Item>
					<List.Item>Item3</List.Item>
					<List.Item>Item4</List.Item>
					<List.Item>Item5</List.Item>
				</List>
				<List>
					<List.LinkItem ripple={true} href="#/component/list">Item1</List.LinkItem>
					<List.LinkItem ripple={true} href="#/component/list">Item2</List.LinkItem>
					<List.LinkItem ripple={true} href="#/component/list">Item3</List.LinkItem>
					<List.LinkItem ripple={true} href="#/component/list">Item4</List.LinkItem>
					<List.LinkItem ripple={true} href="#/component/list">Item5</List.LinkItem>
				</List>
			</div>
		);
	}
}