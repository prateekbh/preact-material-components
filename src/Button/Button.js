import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCRipple} from '../../node_modules/@material/ripple/index';

/** @prop dense = false
 *	@prop raised = false
 *	@prop compact = false
 *	@prop primary = false
 *	@prop accent = false
 *	@prop disabled = false
 */
export default class Button extends MaterialComponent {
	constructor(){
		super();
		this.componentName = 'button';
		this.mdlProps = [
			'dense', 'raised', 'compact', 'primary', 'accent'
		];
	}
	componentDidMount() {
		if (this.props.ripple) {
			MDCRipple.attachTo(this.btn);
		}
	}
	mdlRender(props) {
		return(<button ref={btn=>this.btn = btn}
			{...props}>{this.props.children}</button>);
	}
}