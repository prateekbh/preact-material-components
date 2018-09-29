import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';
import generateThemeClass from '../themeUtils/generateThemeClass';

export class ButtonIcon extends Icon {
  protected componentName = 'button__icon';
}

export interface IButtonProps {
  ripple?: boolean;
  dense?: boolean;
  raised?: boolean;
  disabled?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export interface IButtonState {}

export class Button<
  PropsType = JSX.HTMLAttributes,
  StateType = {}
> extends MaterialComponent<
  PropsType & IButtonProps,
  StateType & IButtonState
> {
  protected componentName = 'button';
  protected mdcProps = ['dense', 'raised', 'unelevated', 'outlined'];
  protected themeProps = ['primary', 'secondary'];

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

export default class<PropsType = {}, StateType = {}> extends Button<
  PropsType,
  StateType
> {
  public static readonly Icon = ButtonIcon;
}
