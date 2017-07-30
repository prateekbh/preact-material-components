import {h, Component} from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Switch from 'preact-material-components/Switch';
import FormField from 'preact-material-components/FormField';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import ButtonsPage from '../ButtonsPage/ButtonsPage.jsx';
import FabPage from '../FabPage/FabPage.jsx';
import CheckboxPage from '../CheckboxPage/CheckboxPage.jsx';
import SwitchPage from '../SwitchPage/SwitchPage.jsx';
import DialogPage from '../DialogPage/DialogPage.jsx';
import DrawerPage from '../DrawerPage/DrawerPage.jsx';
import ElevationPage from '../ElevationPage/ElevationPage.jsx';
import RadioPage from '../RadioPage/RadioPage.jsx';
import ListPage from '../ListPage/ListPage.jsx';
import LinearProgressPage from '../LinearProgressPage/LinearProgressPage.jsx';
import MenuPage from '../MenuPage/MenuPage.jsx';
import SelectPage from '../SelectPage/SelectPage.jsx';
import SnackbarPage from '../SnackbarPage/SnackbarPage.jsx';
import SliderPage from '../SliderPage/SliderPage.jsx';
import TabsPage from '../TabsPage/TabsPage.jsx';
import TextfieldPage from '../TextfieldPage/TextfieldPage.jsx';
import ToolbarPage from '../ToolbarPage/ToolbarPage.jsx';
import CardPage from '../CardPage/CardPage.jsx';
import IconPage from '../IconPage/IconPage.jsx';
import IconToggle from '../IconToggle/IconToggle.jsx';
import FormfieldPage from '../FormfieldPage/FormfieldPage.jsx';
import LayoutGridPage from '../LayoutGridPage/LayoutGridPage.jsx';
import routie from '../routie';
import CodeBlock from '../CodeBlock.jsx';
import invidualComponentSample from './invidual-component-sample.txt';
import jsSample from './js-sample.txt';
import cssSample from './css-sample.txt';
import 'preact-material-components/style.css';
import './Home.css';

export default class Home extends Component {
	constructor(){
		super();
		this.state = {
			darkMode: false
		};
	}
	componentDidMount(){
		routie('/', (component) => {
			this.setState({
				component: null,
				toolbarTitle: ""
			});
		});
		routie('/component/:name', (component) => {
			this.setState({
				component,
				toolbarTitle: component
			});
		});
	}
	closeDrawer(){
		this.drawer.MDComponent.open = false;
	}
	toggleDarkMode(){
		this.setState({
			darkMode: !this.state.darkMode
		});
		if (this.state.darkMode) {
			document.body.classList.add('mdc-theme--dark');
		} else {
			document.body.classList.remove('mdc-theme--dark');
		}
	}
	render(){
		return (
			<div className="home">
				<div className={this.state.component? "hero collapsed": "hero"}>
					<Toolbar>
						<Toolbar.Row>
							<Toolbar.Section align-start={true}>
								<Toolbar.Icon menu={true} href="#" onClick={(e)=>{
												e.preventDefault();
												this.drawer.MDComponent.open = true;
								}}>menu</Toolbar.Icon>
								<Toolbar.Title>
									{this.state.toolbarTitle}
								</Toolbar.Title>
							</Toolbar.Section>
							<Toolbar.Section className="mdc-theme--dark" align-end={true}>
								<FormField className="field-darkmode">
									Dark Mode
									<Switch className="switch-darkmode" onChange={()=>{this.toggleDarkMode();}}/>
								</FormField>
							</Toolbar.Section>
						</Toolbar.Row>
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
								<Drawer.DrawerItem onClick={()=>{
										routie('/');
										this.closeDrawer();
									}}>
										<List.ItemIcon>home</List.ItemIcon>
										Home
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/button');
									this.closeDrawer();
								}}>
										<List.ItemIcon>code</List.ItemIcon>
										Button
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/card');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Card
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/checkbox');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Checkbox
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/dialog');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Dialog
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/drawer');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Drawer
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/elevation');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Elevation
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/fab');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Fab
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/formfield');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Formfield
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/icon');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Icon
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/icontoggle');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									IconToggle
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/layoutgrid');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									LayoutGrid
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/linearprogress');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									LinearProgress
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/list');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									List
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/menu');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Menu
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/radio');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Radio
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/select');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Select
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/slider');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Slider
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/snackbar');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Snackbar
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/switch');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Switch
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/tabs');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Tabs
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/textfield');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Textfield
								</Drawer.DrawerItem>
								<Drawer.DrawerItem onClick={()=>{
									routie('/component/toolbar');
									this.closeDrawer();
								}}>
									<List.ItemIcon>code</List.ItemIcon>
									Toolbar
								</Drawer.DrawerItem>
						</Drawer.TemporaryDrawerContent>
					</Drawer.TemporaryDrawer>
				<LayoutGrid className="content">
					<LayoutGrid.Inner>
						<LayoutGrid.Cell cols="12">
							{this.state.component === 'button' && <ButtonsPage/>}
							{this.state.component === 'fab' && <FabPage/>}
							{this.state.component === 'card' && <CardPage/>}
							{this.state.component === 'checkbox' && <CheckboxPage/>}
							{this.state.component === 'switch' && <SwitchPage/>}
							{this.state.component === 'drawer' && <DrawerPage/>}
							{this.state.component === 'dialog' && <DialogPage/>}
							{this.state.component === 'elevation' && <ElevationPage/>}
							{this.state.component === 'radio' && <RadioPage/>}
							{this.state.component === 'list' && <ListPage/>}
							{this.state.component === 'select' && <SelectPage/>}
							{this.state.component === 'snackbar' && <SnackbarPage/>}
							{this.state.component === 'slider' && <SliderPage/>}
							{this.state.component === 'textfield' && <TextfieldPage/>}
							{this.state.component === 'toolbar' && <ToolbarPage/>}
							{this.state.component === 'icon' && <IconPage/>}
							{this.state.component === 'icontoggle' && <IconToggle/>}
							{this.state.component === 'formfield' && <FormfieldPage/>}
							{this.state.component === 'layoutgrid' && <LayoutGridPage/>}
							{this.state.component === 'tabs' && <TabsPage/>}
							{this.state.component === 'menu' && <MenuPage/>}
							{this.state.component === 'linearprogress' && <LinearProgressPage/>}
							{
								(!this.state.component) &&
								<div>
									<div className="mdc-typography--body">
										<div>
											<span className="grey">preact-material-components</span> is a thin opinionless wrapper around <a href="https://github.com/material-components/material-components-web">material-components-web</a>.
											Use these components to add material components to your web app, without worrying about the extra code of components which you are not using.
										</div>
										<div className="mdc-typography--display1">How to use</div>
										<div>
											All the components of <span className="grey">preact-material-components</span> are built to work independently.
											 So there are couple of ways to use them.
										</div>
										<div>
											<CodeBlock>
												<code class='lang-js' >
													npm i -D preact-material-components
												</code>
											</CodeBlock>
										</div>
										<div>
											<div className="mdc-typography--title">Using the JS of the component</div>
											<div>
												If you are using an ES6 codebase, consider using the components individually, as none of the tree shaking currently removes unused classes.
												<CodeBlock>
													<code class='lang-js' >
														{jsSample}
													</code>
												</CodeBlock>
												Although you can import all the components together, you should not. Importing this way will bring unnecessary code of other components into your final bundle.
												This might hit your metrics like time to interactivity, load times, etc. DO NOT BLOAT YOUR BUNDLE.
												<CodeBlock>
													<code class='lang-js' >
														{invidualComponentSample}
													</code>
												</CodeBlock>
											</div>
										</div>
										<div>
											<div className="mdc-typography--title">Using the CSS of the component</div>
											<div>
												If you are using only a couple of components from the entire package, try importing individual CSS, for the same reason: TO AVOID BLOATING YOUR CSS BUNDLE.
												<CodeBlock>
													<code class='lang-js' >
														{cssSample}
													</code>
												</CodeBlock>
												However this approach might work against you if you use a lot of components. In that case, prefer adding the entire stylesheet at once,
												as it is more optimized for such cases.
												<CodeBlock>
													<code class='lang-js' >
														import 'preact-material-components/style.css';
													</code>
												</CodeBlock>
											</div>
										</div>
									</div>
								</div>
							}
						</LayoutGrid.Cell>
					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}
}