import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon/index';

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

  @autobind
  protected materialDom(props) {
    const ButtonElement = props.href ? 'a' : 'button';

    return (
      <ButtonElement ref={this.setControlRef} {...props}>
        {this.props.children}
      </ButtonElement>
    );
  }
}

export default Button;
