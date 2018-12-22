import {Button} from '@preact-material/button';
import bind from 'bind-decorator';
import {h} from 'preact';

export interface IDialogFooterButtonProps {
  accept?: boolean;
  cancel?: boolean;
}

export interface IDialogFooterButtonState {}

export class DialogFooterButton extends Button<
  IDialogFooterButtonProps,
  IDialogFooterButtonState
> {
  protected componentName = 'dialog__footer__button';
  protected mdcProps = ['cancel', 'accept'];

  @bind
  protected materialDom(props) {
    return (
      <button {...props} className="mdc-button" ref={this.setControlRef}>
        {props.children}
      </button>
    );
  }
}
