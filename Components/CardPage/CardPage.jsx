import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import ComponentTable from '../ComponentTable.jsx';
import 'preact-material-components/Card/style.css';
import './CardPage.css';
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
				<div className="mdc-typography--display2">Demo </div>
				<Card>
					<Card.CardPrimary>
						<Card.Title>Hi</Card.Title>
						<Card.Subtitle>Let me subtitle</Card.Subtitle>
					</Card.CardPrimary>
					<Card.Media className='card-media'></Card.Media>
					<Card.Actions>
						<Card.Action>OKAy</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.CardPrimary>
						<Card.Title>Hi</Card.Title>
						<Card.Subtitle>Let me subtitle</Card.Subtitle>
					</Card.CardPrimary>
					<Card.CardSupportingText>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</Card.CardSupportingText>
					<Card.Actions>
						<Card.Action>OKAy</Card.Action>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}