import {MDCRipple} from '@material/ripple';
import {Component, VNode} from 'preact';

export interface IMaterialComponentProps extends JSX.HTMLAttributes {
  ripple?: boolean;
}

export interface IMaterialComponentState {}

/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */
export abstract class MaterialComponent<
  PropsType extends {[prop: string]: any},
  StateType extends {[prop: string]: any}
> extends Component<
  PropsType & IMaterialComponentProps,
  StateType & IMaterialComponentState
> {
  /**
   * Attributes inside this array will be check for boolean value true
   * and will be converted to mdc classes
   */
  protected abstract mdcProps: Array<string>;
  /** This will again be used to add apt classname to the component */
  protected abstract componentName: string;

  /** The final class name given to the dom */
  protected classText = this.buildClassName();

  // TODO: find out correct type
  protected control?: any;

  /** Attach the ripple effect */
  public attachRipple() {
    if (this.props.ripple && this.control) {
      MDCRipple.attachTo(this.control);
    }
  }

  public render(props: PropsType & IMaterialComponentProps): VNode {
    this.buildClassName();
    // Fetch a VNode
    const componentProps = props;
    const userDefinedClasses =
      componentProps.className || componentProps.class || '';

    // We delete class props and add them later in the final
    // step so every component does not need to handle user specified classes.
    if (componentProps.class) {
      delete componentProps.class;
    }
    if (componentProps.className) {
      delete componentProps.className;
    }

    const element = this.materialDom(componentProps);
    element.attributes = element.attributes || {};

    element.attributes.className = `${userDefinedClasses} ${this.getClassName(
      element
    )}`
      .split(' ')
      .filter(
        (value, index, self) => self.indexOf(value) === index && value !== ''
      ) // Unique + exclude empty class names
      .join(' ');
    // Clean this shit of proxy attributes
    this.mdcProps.forEach(prop => {
      delete element.attributes[prop];
    });
    return element;
  }

  // Shared setter for the root element ref
  protected setControlRef(control: Element) {
    this.control = control;
  }

  /** Build the className based on component names and mdc props */
  protected buildClassName() {
    // Class name based on component name
    let classText = 'mdc-' + this.componentName;

    // Loop over mdcProps to turn them into classNames
    for (const propKey in this.props) {
      if (this.props.hasOwnProperty(propKey)) {
        const prop = this.props[propKey];
        if (typeof prop === 'boolean' && prop) {
          if (this.mdcProps.indexOf(propKey) !== -1) {
            classText += ` mdc-${this.componentName}--${propKey}`;
          }
        }
      }
    }

    return classText;
  }

  /** Returns the class name for element */
  protected getClassName(element: VNode) {
    if (!element) {
      return '';
    }
    const attrs = (element.attributes = element.attributes || {});
    let classText = this.classText;
    if (attrs.class) {
      classText += ' ' + attrs.class;
    }
    if (attrs.className && attrs.className !== attrs.class) {
      classText += ' ' + attrs.className;
    }
    return classText;
  }

  /** Components must implement this method for their specific DOM structure */
  protected abstract materialDom(
    props: PropsType & IMaterialComponentProps
  ): VNode;
}

export default MaterialComponent;
