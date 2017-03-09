import {h, Component} from 'preact';
import Button from '../src/Button/Button';
// import Checkbox from '../src/Checkbox/Checkbox';
// import Select from '../src/Select/Select';

export default class Home extends Component {
	render(){
		return(<div>
			<Button raised={true} accent={true} ripple={true} onClick={()=>{
				this.setState({
					showAnotherButton: !this.state.showAnotherButton,
				});
			}}>hi</Button>
			{this.state.showAnotherButton && <Button accent={true} ripple={true}>bye</Button>}
		</div>);
	}
}