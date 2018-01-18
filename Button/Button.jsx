import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon/";

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
    this.themeProps = ["primary", "secondary", "accent"];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    const ButtonElement = props.href ? "a" : "button";
    let className = "";
    this.themeProps.forEach(themeProp => {
      if (themeProp in props) className += _generateThemeClass(themeProp);
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

const _generateThemeClass = prop => {
  const mappings = {
    primary: "primary",
    secondary: "secondary",
    accent: "secondary"
  };
  return `mdc-theme--${mappings[prop]}-bg `;
};

Button.Icon = ButtonIcon;
export default Button;
