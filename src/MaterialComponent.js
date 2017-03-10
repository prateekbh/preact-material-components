import {h, Component} from 'preact';

export default class MaterialComponent extends Component {
	constructor(){
		super();
		// Attributes inside this array will be check for boolean value true
		// and will be converted to mdc classes
		this.mdcProps = [];
		this.componentName = '';
		this.classText = '';
	}
	build() {
		this.classText = 'mdc-' + this.componentName;
		this.autoInitText = ''
		for (let propKey in this.props) {
			const prop = this.props[propKey];
			if(typeof prop === 'boolean' && prop) {
				if (this.mdcProps.indexOf(propKey) !== -1) {
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
	// Components must implement this method for their DOM structure
	materialDom(props) {
		return <div {...props}>{props.children}</div>
	}
	render() {
		this.build();
		// Fetch a VNode
		const element = this.materialDom(this.props);
		// Clean this shit of proxy attributes

		this.mdcProps.forEach(prop => {
			delete element.attributes[prop];
		});

		const autoInits = this.getAutoInitNames();
		element.attributes.class = this.getClassName();
		return element;
	}
}