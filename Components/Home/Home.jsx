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
								<List.ListItem>
										<List.ListItemIcon>code</List.ListItemIcon>
										Button
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Card
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Checkbox
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Dialog
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Drawer
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Elevation
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Fab
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									FormField
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Icon
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									IconToggle
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									List
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Radio
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Select
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Snackbar
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Switch
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Textfield
								</List.ListItem>
								<List.ListItem>
									<List.ListItemIcon>code</List.ListItemIcon>
									Toolbar
								</List.ListItem>
							</List>
						</Drawer.TemporarytDrawerContent>
					</Drawer.TemporaryDrawer>
			</div>
		);
	}
}