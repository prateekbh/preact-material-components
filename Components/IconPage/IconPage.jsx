import {h, Component} from 'preact';
import Icon from 'preact-material-components/Icon';
import ComponentTable from '../ComponentTable.jsx';
import './IconPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
import linktag from './linktag.txt';
export default class IconPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Icon',
				props: []
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

				<div className="mdc-typography--display1">Demo </div>
				<div><Icon>menu</Icon></div>
				<div><Icon>favorite_border</Icon></div>

				<div className="mdc-typography--title">Note </div>
				<div className="mdc-typography--caption">
					<div>In order to use these you will need to import respective font icons </div>
					<div>
						<CodeBlock>
							<code class='lang-html' >
								{linktag}
							</code>
						</CodeBlock>
					</div>
				</div>
			</div>
		);
	}
}