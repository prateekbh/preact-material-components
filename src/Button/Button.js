import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

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
		this.autoInitConstants = ['ripple'];
		this.componentName = 'button';
		this.mdlProps = [
			'dense', 'raised', 'compact', 'primary', 'accent'
		];
	}
	mdlRender() {
		return(<button
			{...this.props}>{this.props.children}</button>);
	}
	/*render() {
		this.build();
		const className = this.getClassName();
		const autoInits = this.getAutoInitNames();
		return(<button
			className={className}
			data-mdc-auto-init={autoInits}
			{...this.props}>{this.props.children}</button>);
	}*/
}