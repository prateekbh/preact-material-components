import {h, Component} from 'preact';
import Icon from 'preact-material-components/Icon';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import 'preact-material-components/Icon/Icon.css';
import 'preact-material-components/Toolbar/Toolbar.css';
import 'preact-material-components/Drawer/Drawer.css';
import './Home.css';
export default class Home extends Component {
	render(){
		return (
			<div className="home">
				<div className="hero">
					<Toolbar>
						<Toolbar.Section align-start={true}>
							<Toolbar.Icon href="#" onClick={(e)=>{
									e.preventDefault();
									this.drawer.MDComponent.open = true;
								}}>menu</Toolbar.Icon>
						</Toolbar.Section>
					</Toolbar>
					<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} />
				</div>
			</div>
		);
	}
}