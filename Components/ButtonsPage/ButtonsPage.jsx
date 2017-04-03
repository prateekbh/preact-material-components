import {h, Component} from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import './ButtonsPage.css';
export default class ButtonsPage extends Component {
	render(){
		return (
			<div className="page-buttons">
				<div className="mdc-typography--title">Flats </div>
				<Button>Flat button without ripple</Button>
				<Button ripple={true}>Flat button with ripple</Button>
				<Button accent={true}>Accented Flat button</Button>
				<Button dense={true}>Dense Flat button </Button>
				<Button compact={true}>Compact Flat button </Button>
				<Button primary={true}>Primary Flat button </Button>

				<div className="mdc-typography--title">Raised </div>
				<Button raised={true}>Raised button without ripple</Button>
				<Button raised={true} ripple={true}>Raised button with ripple</Button>
				<Button raised={true} accent={true}>Accented Raised button</Button>
				<Button raised={true} dense={true}>Dense Raised button </Button>
				<Button raised={true} compact={true}>Compact Raised button </Button>
				<Button raised={true} primary={true}>Primary Raised button </Button>

				<div className="mdc-typography--title">Raised </div>
				<Button disabled={true}>Disabled button without ripple</Button>
				<Button disabled={true} ripple={true}>Disabled button with ripple</Button>
				<Button disabled={true} accent={true}>Accented Disabled button</Button>
				<Button disabled={true} dense={true}>Dense Disabled button </Button>
				<Button disabled={true} compact={true}>Compact Disabled button </Button>
				<Button disabled={true} primary={true}>Primary Disabled button </Button>
			</div>
		);
	}
}