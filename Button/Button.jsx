import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon/";
import generateThemeClass from "../utils/generateThemeClass";

/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop disabled = false
 *  @prop unelevated = false
 *  @prop stroked = false
 */
class Button extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "button";
    this._mdcProps = ["dense", "raised", "compact", "unelevated", "stroked"];
    this.themeProps = ["primary", "secondary"];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    const ButtonElement = props.href ? "a" : "button";
    let className = "";
    this.themeProps.forEach(themeProp => {
      if (themeProp in props) className += generateThemeClass(themeProp);
    });

    return (
      <ButtonElement
        className={className}
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

class ButtonIcon extends Icon {
  constructor() {
    super();
    this.componentName = "button__icon";
  }
}

Button.Icon = ButtonIcon;
export default Button;
