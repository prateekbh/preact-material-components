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
	Drawer
} from "../Components/";

export default class Home extends Component {
	render(){
		return (<div>
			<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}}>
				<Drawer.TemporarytDrawerHeader>Hello Header</Drawer.TemporarytDrawerHeader>
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
			<Snackbar ref={bar=>{this.bar = bar;}}/>
			<div>
				<div className="mdc-form-field">
					<Checkbox ref={inp=>{this.inp = inp;}} />
				</div>
			</div>
			<div className="mdc-form-field">
				<Radio id="rd" ref={radio=>this.radio=radio}/> <label for="rd">Radio Box</label>
			</div>
			<Textfield label="hello" fullwidth={true} required/>
			<Card>
				<Card.CardSupportingText>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</Card.CardSupportingText>
				<Card.Actions>
						<Card.Action>Hello</Card.Action>
				</Card.Actions>
			</Card>
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
			<Select hintText="Select an option">
				<Select.ListItem>opt1</Select.ListItem>
				<Select.ListItem>opt2</Select.ListItem>
				<Select.ListItem>opt3</Select.ListItem>
				<Select.ListItem>opt4</Select.ListItem>
			</Select>
			<List>
				<List.ListItem>Item1</List.ListItem>
				<List.ListItem>Item2</List.ListItem>
				<List.ListItem>Item3</List.ListItem>
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