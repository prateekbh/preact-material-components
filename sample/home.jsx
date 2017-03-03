import {h, Component} from 'preact';
import Button from '../src/Button/Button';
import Checkbox from '../src/Checkbox/Checkbox';
import Select from '../src/Select/Select';

export default class Home extends Component {
	render(){
		return(<div>
			<Button raised={true} Ripple={true} onClick={()=>{
				this.setState({
					showSelect: !this.state.showSelect,
				});
			}}>hi</Button>
			<Checkbox >hello</Checkbox>
			{this.state.showSelect && <Select onChange={()=>{alert('yo')}}/>}
		</div>);
	}
}