import { h, Component } from "preact";
import { MDCRipple } from "@material/ripple";

/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */
export default class MaterialComponent extends Component {
  constructor() {
    super();
    // Attributes inside this array will be check for boolean value true
    // and will be converted to mdc classes
    this._mdcProps = [];
    // This will again be used to add apt classname to the component
    this.componentName = "";
    // The final class name given to the dom
    this.classText = "";
  }
  attachRipple() {
    if (this.props.ripple && this.control) {
      MDCRipple.attachTo(this.control);
    }
  }
  // Build the className
  buildClassName(props) {
    this.classText = "mdc-" + this.componentName;
    for (let propKey in this.props) {
      if (this.props.hasOwnProperty(propKey)) {
        const prop = this.props[propKey];
        if (typeof prop === "boolean" && prop) {
          if (this._mdcProps.indexOf(propKey) !== -1) {
            this.classText += " mdc-" + this.componentName + "--" + propKey;
          }
        }
      }
    }
  }
  getClassName(element) {
    if (!element) {
      return "";
    }
    const attrs = (element.attributes = element.attributes || {});
    let classText = this.classText;
    if (attrs.class) {
      classText += " " + attrs.class;
    }
    if (attrs.className && attrs.className !== attrs.class) {
      classText += " " + attrs.className;
    }
    return classText;
  }
  // Components must implement this method for their specific DOM structure
  materialDom(props) {
    return h("div", Object.assign({}, props), props.children);
  }
  render() {
    this.buildClassName();
    // Fetch a VNode
    const componentProps = this.props;
    if (componentProps.class) {
      // We delete class prop here so that any sub node's class doesn't get over-ridden from this
      delete componentProps.class;
    }
    const element = this.materialDom(componentProps);
    element.attributes = element.attributes || {};
    // Fix for className
    element.attributes.class = this.getClassName(element);
    element.attributes.className = this.getClassName(element);
    // Clean this shit of proxy attributes
    this._mdcProps.forEach(prop => {
      delete element.attributes[prop];
    });
    return element;
  }
}
