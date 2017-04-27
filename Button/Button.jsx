import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 */
export default class Button extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "button";
    this._mdcProps = ["dense", "raised", "compact", "primary", "accent"];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    return (
      <button
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        {this.props.children}
      </button>
    );
  }
}
