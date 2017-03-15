import { h, Component } from "preact";
import { MDCRipple } from "../node_modules/@material/ripple/index";

export default class MaterialComponent extends Component {
  constructor() {
    super();
    // Attributes inside this array will be check for boolean value true
    // and will be converted to mdc classes
    this._mdcProps = [];
    this.componentName = "";
    this.classText = "";
  }
  attachRipple(){
    if (this.props.ripple) {
      MDCRipple.attachTo(this.control);
    }
  }
  build(props) {
    this.classText = "mdc-" + this.componentName;
    this.autoInitText = "";
    for (let propKey in this.props) {
      const prop = this.props[propKey];
      if (typeof prop === "boolean" && prop) {
        if (this._mdcProps.indexOf(propKey) !== -1) {
          this.classText += " mdc-" + this.componentName + "--" + propKey;
        }
      }
    }
  }
  getClassName(element) {
    if (element && element.attributes.className) {
      return this.classText + " " + element.attributes.className;
    }
    return this.classText;
  }
  getAutoInitNames() {
    return this.autoInitText;
  }
  // Components must implement this method for their DOM structure
  materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
  render() {
    this.build();
    // Fetch a VNode
    const element = this.materialDom(this.props);
    const autoInits = this.getAutoInitNames();
    // Fix for className
    element.attributes.class = this.getClassName(element);
    // Clean this shit of proxy attributes
    this._mdcProps.forEach(prop => {
      delete element.attributes[prop];
    });

    return element;
  }
}
