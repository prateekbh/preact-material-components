import {h, Component} from 'preact';
import IconToggle from 'preact-material-components/IconToggle';
import ComponentTable from '../ComponentTable.jsx';
import './IconToggle.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class IconTogglePage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'IconToggle',
				props: [
					{
						name: 'disabled',
						description: 'Is the icon disabled'
					},
					{
						name: 'data-toggle-on',
						description: 'JSON object for toggle on icon'
					},
					{
						name: 'data-toggle-off',
						description: 'JSON object for toggle off icon'
					}
				]
			}
		];
	}
	render(){
		const toggleOnIcon = {
			content: "favorite",
			label: "Remove From Favorites"
		};
		const toggleOffIcon = {
			content: "favorite_border",
			label: "Add to Favorites"
		};
		return (
			<div className="page-icontoggle">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-icon-toggle</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<IconToggle
					role="button"
					tabindex="0"
					aria-pressed="false"
					aria-label="Add to favorites"
					data-toggle-on={toggleOnIcon}
					data-toggle-off={toggleOffIcon}
				>
          favorite_border
				</IconToggle>

			</div>
		);
	}
}