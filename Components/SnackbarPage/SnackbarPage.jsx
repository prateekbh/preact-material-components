import {h, Component} from 'preact';
import Snackbar from 'preact-material-components/Snackbar';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Snackbar/style.css';
import './SnackbarPage.css';
export default class SnackbarPage extends Component {
	render(){
		return (
			<div className="page-snackbar">
				<div className="mdc-typography--display2">Props </div>
				<div className="mdc-typography--body1">none</div>

				<div className="mdc-typography--display2">Demo </div>
				<Button raised={true} primary={true} onClick={()=>{
					this.bar.MDComponent.show({
						message: "Hello Snack!"
					});
				}}>
						Show snack</Button>
				<Snackbar ref={bar=>{this.bar=bar;}}/>
			</div>
		);
	}
}