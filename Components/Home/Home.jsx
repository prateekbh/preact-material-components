import {h, Component} from 'preact';
import Icon from 'preact-material-components/Icon';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import ButtonsPage from '../ButtonsPage/ButtonsPage.jsx';

import 'preact-material-components/Icon/style.css';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
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
					<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid">
						<g>
							<title>background</title>
							<rect fill="none" id="canvas_background" height="202" width="202" y="-1" x="-1"/>
						</g>
						<g>
							<title>Layer 1</title>
							<path stroke="#673ab8" id="svg_19" fill="#673ab8" d="m100,6.87844l83.36915,46.56078l0,93.12156l-83.36915,46.56078l-83.36914,-46.56078l0,-93.12156l83.36914,-46.56078z"/>
							<g id="svg_34">
							<g stroke="null" id="svg_5">
								<circle stroke="null" id="svg_1" r="56.999668" cy="99.999997" cx="99.333339" class="st0"/>
								<path stroke="null" id="svg_2" d="m59.433574,60.100231l79.799535,0l0,79.799535l-79.799535,0l0,-79.799535z" class="st1"/>
								<path stroke="null" id="svg_3" d="m139.233109,60.100231l-39.899768,79.799535l-39.899768,-79.799535l79.799535,0z" class="st2"/>
								<path stroke="null" id="svg_4" d="m42.333671,43.000329l113.999336,0l0,113.999336l-113.999336,0l0,-113.999336z" class="st3"/>
							</g>
							<ellipse ry="1.999985" rx="1.999985" id="svg_25" cy="93.333385" cx="99.333336" stroke-width="null" stroke="null" fill="#673ab8"/>
							</g>
							<g stroke="null" id="svg_36">
							<ellipse stroke="#673ab8" transform="matrix(0.17321515449627276,0.17321515449627273,-0.17321515449627273,0.17321515449627276,63.46362017579341,27.139604895916065) " ry="20.957719" rx="75.190925" id="svg_32" cy="89.457308" cx="296.539126" fill-opacity="null" stroke-width="5" fill="none"/>
							<ellipse stroke="#673ab8" transform="matrix(0.17321515449627276,-0.17321515449627273,0.17321515449627273,0.17321515449627276,28.182048694186207,62.16614021567621) " ry="20.957719" rx="75.190925" id="svg_35" cy="297.275314" cx="113.492909" fill-opacity="null" stroke-width="5" fill="none"/>
							</g>
						</g>
					</svg>
					<div className="mdc-typography--display2 name">preact-material-components</div>
				</div>
				<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >
						<Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
							Components
						</Drawer.TemporaryDrawerHeader>
						<Drawer.TemporaryDrawerContent>
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
						</Drawer.TemporaryDrawerContent>
					</Drawer.TemporaryDrawer>
					<div className="content">
						<ButtonsPage></ButtonsPage>
					</div>

			</div>
		);
	}
}