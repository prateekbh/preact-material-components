import {h, Component} from 'preact';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';
import './ListPage.css';
export default class ListPage extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="page-list">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">dense</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes the list with lesser padding</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">two-line(not implemented yet)</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Makes container for two line list item</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
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