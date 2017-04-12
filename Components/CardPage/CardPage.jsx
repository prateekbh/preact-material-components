import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import ComponentTable from '../ComponentTable.jsx';
import './CardPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class CardPage extends Component {
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
			}
		];
	}
	render(){
		return (
			<div className="page-card">
				<ComponentTable data={this.propsTable} />

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-card</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<Card>
					<Card.Primary>
						<Card.Title>Hi</Card.Title>
						<Card.Subtitle>Let me subtitle</Card.Subtitle>
					</Card.Primary>
					<Card.Media className='card-media'></Card.Media>
					<Card.Actions>
						<Card.Action>OKAy</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Hi</Card.Title>
						<Card.Subtitle>Let me subtitle</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAy</Card.Action>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}