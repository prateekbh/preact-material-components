import {h, Component} from 'preact';
import LinearProgress from 'preact-material-components/LinearProgress';
import ComponentTable from '../ComponentTable.jsx';
import './LinearProgressPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class LinearProgressPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'LinearProgress',
				props: [
					{
						name: 'indeterminate',
						description: 'tells if the progress bar is running forever'
					},
					{
						name: 'reversed',
						description: 'tells if the progress bar direction is reversed'
					},
					{
						name: 'accent',
						description: 'makes the colour of the progress bar accented'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-linear-progress">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-linear-progress</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Indeterminate </div>
				<LinearProgress indeterminate={true} />

				<div className="mdc-typography--title">Reversed </div>
				<LinearProgress reversed={true} indeterminate={true}/>

				<div className="mdc-typography--title">Accent </div>
				<LinearProgress indeterminate={true} accent={true} />
			</div>
		);
	}
}