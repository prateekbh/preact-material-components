import {h, Component} from 'preact';
import Snackbar from 'preact-material-components/Snackbar';
import Button from 'preact-material-components/Button';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Snackbar/style.css';
import './SnackbarPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class SnackbarPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Snackbar',
				props: []
			}
		];
	}
	render(){
		return (
			<div className="page-snackbar">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Demo </div>
				<Button raised={true} primary={true} onClick={()=>{
					this.bar.MDComponent.show({
						message: "Hello Snack!"
					});
				}}>
						Show snack</Button>
				<Snackbar ref={bar=>{this.bar=bar;}}/>
			</div>
		);
	}
}