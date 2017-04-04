import {h, Component} from 'preact';
import Dialog from 'preact-material-components/Dialog';
import Button from 'preact-material-components/Button';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Dialog/style.css';
import './DialogPage.css';
export default class DialogPage extends Component {
	render(){
		return (
			<div className="page-dialog">
				<div className="mdc-typography--display2">Props </div>
				<div className="mdc-typography--body1">none</div>

				<div className="mdc-typography--display2">Demo </div>
				<Button primary={true} raised={true} onClick={()=>{
						this.normalDlg.MDComponent.show()
					}}>
					Show Dialog
				</Button>
				<Button primary={true} raised={true} onClick={()=>{
						this.scrollingDlg.MDComponent.show()
					}}>
					Show Scrollable Dialog
				</Button>
				<Dialog ref={normalDlg=>{this.normalDlg=normalDlg;}}>
					<Dialog.DialogHeader>Use Google's location service?</Dialog.DialogHeader>
					<Dialog.DialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Dialog.DialogBody>
					<Dialog.DialogFooter>
						<Dialog.DialogFooterButton cancel={true}>Decline</Dialog.DialogFooterButton>
						<Dialog.DialogFooterButton accept={true}>Accept</Dialog.DialogFooterButton>
					</Dialog.DialogFooter>
				</Dialog>
				<Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>
					<Dialog.DialogHeader>Scroll for me ;)</Dialog.DialogHeader>
					<Dialog.DialogBody scrollable={true}>
						<List>
							<List.ListItem>Item 1</List.ListItem>
							<List.ListItem>Item 2</List.ListItem>
							<List.ListItem>Item 3</List.ListItem>
							<List.ListItem>Item 4</List.ListItem>
							<List.ListItem>Item 5</List.ListItem>
						</List>
					</Dialog.DialogBody>
					<Dialog.DialogFooter>
						<Dialog.DialogFooterButton cancel={true}>Decline</Dialog.DialogFooterButton>
						<Dialog.DialogFooterButton accept={true}>Accept</Dialog.DialogFooterButton>
					</Dialog.DialogFooter>
				</Dialog>
			</div>
		);
	}
}