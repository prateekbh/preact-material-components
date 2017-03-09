import {h, Component} from 'preact';
import Button from '../src/Button/Button';
import CheckBox from '../src/CheckBox/CheckBox';
import Fab from '../src/Fab/Fab';

export default class Home extends Component {
	render(){
		return(<div>
			<Button raised={true} accent={true} ripple={true} onClick={()=>{
				this.setState({
					showAnotherButton: !this.state.showAnotherButton,
				});
			}}>hi</Button>
			<Fab mini={true} ripple={true} icon='share'/>
			{this.state.showAnotherButton &&
				<div>
					<Button accent={true} ripple={true}>bye</Button>
					<div>
						<CheckBox label='hello'/>
					</div>
				</div>}
		</div>);
	}
}