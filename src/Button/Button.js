import {h, Component} from 'preact';

export default class Button extends Component {
	constructor(){
		super();
		this.autoInitConstants = ['Ripple'];
		this.componentName='button'
	}
	render() {
		let className = this.props.className || 'mdc-button';
		let autoInits = this.props.className || '';
		for (let propKey in this.props) {
			const prop = this.props[propKey];
			if(typeof prop === 'boolean') {
				if(this.autoInitConstants.indexOf(propKey) <0) {
					className += ' mdc-' + this.componentName + '--' + propKey;
				} else {
					autoInits += 'MDC' + propKey;
				}

			}
		}

		return(<button
			className={className}
			data-mdc-auto-init={autoInits}
			{...this.props}>{this.props.children}</button>);
	}
}