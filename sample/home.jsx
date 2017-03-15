import {h, Component} from 'preact';
import {Button, Fab, Icon, Switch, Snackbar}  from '../src/';

export default class Home extends Component {
	render(){
		return(<div>
			<Button raised={true} accent={true} ripple={true} onClick={()=>{
				this.setState({
					showAnotherButton: !this.state.showAnotherButton,
				},()=>{
					console.log(this.bar);
					debugger;
				});
			}}>hi</Button>
			{this.state.showAnotherButton && <div>
					<Fab mini={true} ripple={true}>
						<Icon icon='share'/>
					</Fab>
					<Switch/>
				</div>}
			<Snackbar ref={bar=>{this.bar = bar;}}/>
		</div>);
	}
}