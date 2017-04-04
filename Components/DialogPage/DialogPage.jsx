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
					<Dialog.Header>Use Google's location service?</Dialog.Header>
					<Dialog.Body>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
						<Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
				<Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>
					<Dialog.Header>Scroll for me ;)</Dialog.Header>
					<Dialog.Body scrollable={true}>
						<List>
							<List.Item>Item 1</List.Item>
							<List.Item>Item 2</List.Item>
							<List.Item>Item 3</List.Item>
							<List.Item>Item 4</List.Item>
							<List.Item>Item 5</List.Item>
						</List>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
						<Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}