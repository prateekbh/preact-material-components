import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon/index';
import generateThemeClass from '../themeUtils/generateThemeClass';

export class ButtonIcon extends Icon {
  protected componentName = 'button__icon';
}

export interface IButtonProps {
  dense?: boolean;
  raised?: boolean;
  disabled?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  primary?: boolean;
}

export interface IButtonState {}

/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop disabled = false
 *  @prop unelevated = false
 *  @prop stroked = false
 */
export class Button<
  PropsType = JSX.HTMLAttributes,
  StateType = {}
> extends MaterialComponent<
  PropsType & IButtonProps,
  StateType & IButtonState
> {
  public static readonly Icon = ButtonIcon;

  protected componentName = 'button';
  protected mdcProps = ['dense', 'raised', 'unelevated', 'outlined'];
  protected themeProps = ['primary', 'secondary'];

  public componentDidMount() {
    super.attachRipple();
  }

  @autobind
  protected materialDom(props) {
    const ButtonElement = props.href ? 'a' : 'button';
    let className = '';
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false) {
        className += generateThemeClass(themeProp) + ' ';
      }
    });

    return (
      <ButtonElement ref={this.setControlRef} {...props} className={className}>
        {this.props.children}
      </ButtonElement>
    );
  }
}

export default Button;
