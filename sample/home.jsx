import {h, Component} from 'preact';
import {Button, Fab, Icon, Switch, Snackbar, Checkbox}  from '../src/';

export default class Home extends Component {
	render(){
		return(<div>
			<Button raised={true} accent={true} ripple={true}  onClick={()=>{
				console.log(this.bar);
				console.log(this.inp.foundation.checked);
				console.log("==========");

			}}>hi</Button>
			<div>
				<Fab mini={true} ripple={true}>
					<Icon icon='share'/>
				</Fab>
				<Switch/>
			</div>
			<Snackbar ref={bar=>{this.bar = bar;}}/>
			<Checkbox ref={inp=>{this.inp = inp;}} />
		</div>);
	}
}