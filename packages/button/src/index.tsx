import {generateThemeClass} from '@preact-material/base';
import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';

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
        {this.props.children}
      </ButtonElement>
    );
  }
}

export * from './icon';
