import {h, Component} from 'preact';
import Button from '../src/Button/Button';
import CheckBox from '../src/CheckBox/CheckBox';
import Fab from '../src/Fab/Fab';
import Icon from '../src/Icon/Icon';

export default class Home extends Component {
	render(){
		return(<div>
			<Button raised={true} accent={true} ripple={true} onClick={()=>{
				this.setState({
					showAnotherButton: !this.state.showAnotherButton,
				});
			}}>hi</Button>
			<Fab mini={true} ripple={true}>
				<Icon icon='share'/>
			</Fab>
			{this.state.showAnotherButton &&
				<div>
					<Button accent={true} ripple={true}>bye</Button>
					<div>
						<CheckBox label='hello'/>
					</div>
				</div>}
			<i class="mdc-icon-toggle material-icons" role="button" aria-pressed="false"
				aria-label="Add to favorites" tabindex="0"
				data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
				data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'>
				favorite_border
			</i>
		</div>);
	}
}