import {h, Component} from 'preact';
import Button from 'preact-material-components/Button';
import ComponentTable from '../ComponentTable.jsx';
import CodeBlock from '../CodeBlock.jsx';
import 'preact-material-components/Button/style.css';
import './ButtonsPage.css';
import sample from './sample.txt';

export default class ButtonsPage extends Component {
	constructor() {
		super();
		this.propsTable = [
			{
				component: 'Button',
				props: [
					{
						name: 'ripple',
						description: 'Adds riple effect to the button'
					},
					{
						name: 'primary',
						description: 'Adds primary colors to the button'
					},
					{
						name: 'accent',
						description: 'Adds accent colors to the button'
					},
					{
						name: 'dense',
						description: 'Adds dense padding to the button'
					},
					{
						name: 'compact',
						description: 'Adds compact padding to the button'
					}
				]
			}
		];
	}
	render(){
		console.log(sample);
		return (
			<div className="page-buttons">
				<ComponentTable data={this.propsTable} />

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Flats </div>
				<Button>Flat button without ripple</Button>
				<Button ripple={true}>Flat button with ripple</Button>
				<Button accent={true}>Accented Flat button</Button>
				<Button dense={true}>Dense Flat button </Button>
				<Button compact={true}>Compact Flat button </Button>
				<Button primary={true}>Primary Flat button </Button>

				<div className="mdc-typography--title">Raised </div>
				<Button raised={true}>Raised button without ripple</Button>
				<Button raised={true} ripple={true}>Raised button with ripple</Button>
				<Button raised={true} accent={true}>Accented Raised button</Button>
				<Button raised={true} dense={true}>Dense Raised button </Button>
				<Button raised={true} compact={true}>Compact Raised button </Button>
				<Button raised={true} primary={true}>Primary Raised button </Button>

				<div className="mdc-typography--title">Raised </div>
				<Button disabled={true}>Disabled button without ripple</Button>
				<Button disabled={true} ripple={true}>Disabled button with ripple</Button>
				<Button disabled={true} accent={true}>Accented Disabled button</Button>
				<Button disabled={true} dense={true}>Dense Disabled button </Button>
				<Button disabled={true} compact={true}>Compact Disabled button </Button>
				<Button disabled={true} primary={true}>Primary Disabled button </Button>
			</div>
		);
	}
}