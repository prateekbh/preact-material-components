import { Component, VNode } from 'preact';

/**
 * Base class for every Material component in this package
 * 
 * NOTE: every component should add a ref by the name of `control` to its root
 * dom for autoInit Properties
 */
export default class MaterialComponent<PropsType, StateType> extends Component<PropsType, StateType> {
  /**
   * Attributes inside this array will be check for boolean value true
   * and will be converted to mdc classes
   */
  private _mdcProps: string[];

  /** This will again be used to add apt classname to the component */
  private componentName: string;

  /** The final class name given to the dom */
  private classText: string;

  /** Attach the ripple effect */
  attachRipple(): void;

  /** Build the className */
  buildClassName(): void;

  /** Returns the class name for element */
  getClassName(element: Element): string;

  /** Components must implement this method for their specific DOM structure */
  materialDom(props: PropsType): VNode;

  render(): JSX.Element;
}