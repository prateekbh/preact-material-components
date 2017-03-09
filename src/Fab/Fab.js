import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCRipple} from '../../node_modules/@material/ripple/index';

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Fab extends MaterialComponent {
	constructor(){
		super();
		this.componentName = 'fab';
		this.mdlProps = [
			'mini', 'plain',
		];
	}
	componentDidMount() {
		if (this.props.ripple) {
			MDCRipple.attachTo(this.btn);
		}
	}
	mdlRender(props) {
		return(<button {...props} ref={btn=>this.btn = btn}>
			<span class="mdc-fab__icon">
				{props.icon}
			</span>
		</button>);
	}
}