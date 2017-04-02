import {h, Component} from 'preact';
import Icon from 'preact-material-components/Icon';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import 'preact-material-components/Icon/Icon.css';
import 'preact-material-components/Toolbar/Toolbar.css';
import 'preact-material-components/Drawer/Drawer.css';
import 'preact-material-components/List/List.css';
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
				</div>
				<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >
						<Drawer.TemporarytDrawerHeader className="mdc-theme--primary-bg">
							Components
						</Drawer.TemporarytDrawerHeader>
						<Drawer.TemporarytDrawerContent>
							<List>
								<List.ListItem>Button</List.ListItem>
								<List.ListItem>Card</List.ListItem>
								<List.ListItem>Checkbox</List.ListItem>
								<List.ListItem>Dialog</List.ListItem>
								<List.ListItem>Drawer</List.ListItem>
								<List.ListItem>Elevation</List.ListItem>
								<List.ListItem>Fab</List.ListItem>
								<List.ListItem>FormField</List.ListItem>
								<List.ListItem>Icon</List.ListItem>
								<List.ListItem>IconToggle</List.ListItem>
								<List.ListItem>List</List.ListItem>
								<List.ListItem>Radio</List.ListItem>
								<List.ListItem>Select</List.ListItem>
								<List.ListItem>Snackbar</List.ListItem>
								<List.ListItem>Switch</List.ListItem>
								<List.ListItem>Textfield</List.ListItem>
								<List.ListItem>Toolbar</List.ListItem>
							</List>
						</Drawer.TemporarytDrawerContent>
					</Drawer.TemporaryDrawer>
			</div>
		);
	}
}