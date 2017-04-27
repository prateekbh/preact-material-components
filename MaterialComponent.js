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
    element.attributes = element.attributes || {};
    if (element.attributes.className) {
      return this.classText + " " + element.attributes.className;
    }
    return this.classText;
  }
  getAutoInitNames() {
    return this.autoInitText;
  }
  // Components must implement this method for their specific DOM structure
  materialDom(props) {
    return h("div", Object.assign({}, props), props.children);
  }
  render() {
    this.buildClassName();
    // Fetch a VNode
    const element = this.materialDom(this.props);
    element.attributes = element.attributes || {};
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
