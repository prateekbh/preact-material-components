import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import Icon from '../Icon/';
import generateThemeClass from '../themeUtils/generateThemeClass';

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
    this.componentName = 'button';
    this._mdcProps = ['dense', 'raised', 'unelevated', 'stroked'];
    this.themeProps = ['primary', 'secondary'];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    const ButtonElement = props.href ? 'a' : 'button';
    let className = '';
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false)
        className += generateThemeClass(themeProp) + ' ';
    });

    return (
      <ButtonElement ref={this.setControlRef} {...props} className={className}>
        {this.props.children}
      </ButtonElement>
    );
  }
}

class ButtonIcon extends Icon {
  constructor() {
    super();
    this.componentName = 'button__icon';
  }
}

Button.Icon = ButtonIcon;
export default Button;
