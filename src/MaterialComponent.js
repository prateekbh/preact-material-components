import {h, Component} from 'preact';

export default class MaterialComponent extends Component {
	constructor(){
		super();
		this.mdlProps = [];
		this.componentName = '';
		this.autoInitConstants = [''];
		this.classText = '';
		this.autoInitText = '';
	}
	build() {
		this.classText = 'mdc-' + this.componentName;
		this.autoInitText = ''
		for (let propKey in this.props) {
			const prop = this.props[propKey];
			if(typeof prop === 'boolean' && prop) {
				if (this.mdlProps.indexOf(propKey) !== -1) {
					this.classText += ' mdc-' + this.componentName + '--' + propKey;
				} else if (this.autoInitConstants.indexOf(propKey.toLowerCase()) !== -1) {
					this.autoInitText += 'MDC' + propKey + ', ';
				}

			}
		}
		console.log('class', this.classText, this.props);
	}
	getClassName() {
		return this.classText;
	}
	getAutoInitNames() {
		return this.autoInitText;
	}
	mdlRender(props) {
		return <div {...props}>{props.children}</div>
	}
	render() {
		this.build();
		// Fetch a VNode
		const element = this.mdlRender(this.props);
		// Clean this shit of proxy attributes
		for (let propKey in this.props) {
			delete element.attributes[propKey]
		}

		const className = this.getClassName();
		const autoInits = this.getAutoInitNames();
		element.attributes.class = className;
		return element;
	}
}