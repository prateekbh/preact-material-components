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
			</div>
		);
	}
}