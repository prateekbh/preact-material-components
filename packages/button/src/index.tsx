import {generateThemeClass} from '@preact-material-components/base';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {ButtonIcon} from './icon';
import {h} from 'preact';

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
        {props.icon&& <ButtonIcon>{props.icon}</ButtonIcon>}
        <span class="mdc-button__label">{this.props.children}</span>
      </ButtonElement>
    );
  }
}
