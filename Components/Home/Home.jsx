import {h, Component} from 'preact';
import Icon from 'preact-material-components/Icon/Icon.js';
import 'preact-material-components/Icon/Icon.css';
import './Home.css';
export default class Home extends Component {
	render(){
		return (
			<div className="home">
				<div className="hero">
					<Icon icon="menu"/>
					<h1 className="mdc-typography--title">preact-material-components</h1>
				</div>
			</div>
		);
	}
}