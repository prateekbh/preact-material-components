import {h, Component} from 'preact';
import {
	Button,
	Fab,
	Icon,
	Switch,
	Snackbar,
	Checkbox,
	Radio,
	Textfield,
	Card,
	Select,
	Elevation,
	Dialog,
	List,
	Drawer,
	Toolbar,
	LayoutGrid
} from "../";

export default class Home extends Component {
	render(){
		return (<div>
			<Toolbar>
				<Toolbar.Row>
					<Toolbar.Section>
						<Toolbar.Icon>menu</Toolbar.Icon>
						<Toolbar.Title>Hi</Toolbar.Title>
					</Toolbar.Section>
				</Toolbar.Row>
			</Toolbar>

			<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}}>
				<Drawer.TemporaryDrawerHeader>Hello Header</Drawer.TemporaryDrawerHeader>
				<Drawer.DrawerItem>Item1</Drawer.DrawerItem>
				<Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
			</Drawer.TemporaryDrawer>

			<Button raised={true} accent={true} ripple={true}
				onClick={e=>{
					this.drawer.MDComponent.open = true;
				}}>hi</Button>

			<div>
				<Fab mini={true} ripple={true}>
					<Icon icon='share'/>
				</Fab>
				<Switch/>
			</div>

			<Snackbar ref={bar=>{this.bar = bar;}} />

			<div>
				<div className="mdc-form-field">
					<Checkbox ref={inp=>{this.inp = inp;}} />
				</div>
			</div>

			<div className="mdc-form-field">
				<Radio id="rd" ref={radio=>this.radio=radio}/> <label for="rd">Radio Box</label>
			</div>

			<Textfield label="hello" fullwidth={true} required />

			<LayoutGrid>
				<LayoutGrid.Cell cols={6} tabletCols={8} phoneCols={12}>
					<Card>
						<Card.Title>Card title</Card.Title>
						<Card.Subtitle>Subtitle</Card.Subtitle>
						<Card.SupportingText>
							This card is displayed within a layout grid.
						</Card.SupportingText>
						<Card.Actions>
							<Card.Action>Hello</Card.Action>
						</Card.Actions>
					</Card>
				</LayoutGrid.Cell>
			</LayoutGrid>

			<Elevation z3={true}>
				hi
			</Elevation>

			<Dialog ref={dlg=>{this.dlg=dlg;}}>
				<Dialog.DialogHeader>Hello Dialog</Dialog.DialogHeader>
				<Dialog.DialogBody>What is this Dialog stuff??</Dialog.DialogBody>
				<Dialog.DialogFooter>
					<Dialog.DialogFooterButton>No</Dialog.DialogFooterButton>
					<Dialog.DialogFooterButton accept={true}>Yes</Dialog.DialogFooterButton>
				</Dialog.DialogFooter>
			</Dialog>
			<div>
				<Select hintText="Select an option">
					<Select.Item>opt1</Select.Item>
					<Select.Item>opt2</Select.Item>
					<Select.Item>opt3</Select.Item>
					<Select.Item>opt4</Select.Item>
				</Select>
			</div>
			<div>
				<Select basic={true}>
					<option value="" default selected>Pick a food</option>
					<option value="grains">Bread, Cereal, Rice, and Pasta</option>
					<option value="vegetables">Vegetables</option>
					<optgroup label="Fruits">
						<option value="apple">Apple</option>
						<option value="oranges">Orange</option>
						<option value="banana">Banana</option>
					</optgroup>
					<option value="dairy">Milk, Yogurt, and Cheese</option>
					<option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
					<option value="fats">Fats, Oils, and Sweets</option>
				</Select>
			</div>

			<List>
				<List.Item>Item1</List.Item>
				<List.Item>Item2</List.Item>
				<List.Item>Item3</List.Item>
			</List>

			<hr/>

			<List interactive={true}>
				<List.LinkItem ripple={true} href="#">Item1</List.LinkItem>
				<List.LinkItem ripple={true} href="#">Item2</List.LinkItem>
				<List.LinkItem ripple={true} href="#">Item3</List.LinkItem>
			</List>
		</div>);
	}
}