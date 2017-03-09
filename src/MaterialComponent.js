import {h, Component} from 'preact';

export default class MaterialComponent extends Component {
	constructor(){
		super();
		this.mdlProps = [];
		this.componentName = '';
		this.classText = '';
	}
	build() {
		this.classText = 'mdc-' + this.componentName;
		this.autoInitText = ''
		for (let propKey in this.props) {
			const prop = this.props[propKey];
			if(typeof prop === 'boolean' && prop) {
				if (this.mdlProps.indexOf(propKey) !== -1) {
					this.classText += ' mdc-' + this.componentName + '--' + propKey;
				}
			}
		}
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

		this.mdlProps.forEach(prop => {
			delete element.attributes[prop];
		});

		const autoInits = this.getAutoInitNames();
		element.attributes.class = this.getClassName();
		return element;
	}
}