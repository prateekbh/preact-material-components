import {h, Component} from 'preact';
import Icon from 'preact-material-components/Icon';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Icon/Icon.css';
import 'preact-material-components/Toolbar/Toolbar.css';
import './Home.css';
export default class Home extends Component {
	render(){
		return (
			<div className="home">
				<div className="hero">
					<Toolbar icon="menu" />
				</div>
			</div>
		);
	}
}