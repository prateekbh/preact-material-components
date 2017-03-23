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
  Select,
	Card,
	Elevation,
	Dialog
} from "../src/";


export default class Home extends Component {
	render(){
		return (<div>
			<Button raised={true} accent={true} ripple={true}
				onClick={e=>{
					this.dlg.MDComponent.show();
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
			<div>
				<Select hintText="Choose your side buddy">
					<Select.Option>Option1</Select.Option>
				</Select>
			</div>
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
		</div>);
	}
}