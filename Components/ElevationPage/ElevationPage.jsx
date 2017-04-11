import {h, Component} from 'preact';
import Elevation from 'preact-material-components/Elevation';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Elevation/style.css';
import './ElevationPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class ElevationPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Elevation',
				props: [
					{
						name: 'z1..z25',
						description: 'Add one of z1 to z25=true to get different elevations.'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-elevation">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-elevation</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<Elevation z0={true}>Z0</Elevation>
				<Elevation z1={true}>Z1</Elevation>
				<Elevation z2={true}>Z2</Elevation>
				<Elevation z3={true}>Z3</Elevation>
				<Elevation z4={true}>Z4</Elevation>
			</div>
		);
	}
}