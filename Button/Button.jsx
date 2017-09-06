import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 *  @prop unelevated = false
 */
export default class Button extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "button";
    this._mdcProps = [
      "dense",
      "raised",
      "compact",
      "primary",
      "accent",
      "unelevated",
      "stroked"
    ];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    const ButtonElement = props.href ? "a" : "button";

    return (
      <ButtonElement
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        {this.props.children}
      </ButtonElement>
    );
  }
}
