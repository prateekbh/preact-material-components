import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IDialogButtonProps {
  scrollable?: boolean;
}

export interface IDialogButtonState {}

export class DialogButton extends MaterialComponent<
  IDialogButtonProps,
  IDialogButtonState
> {
  protected componentName = 'dialog__button';
  protected mdcProps = [];

  protected materialDom(allProps) {
    let {accept, cancel, action, children, props} = allProps;
    action = action || false;
    if (accept) {
      action = 'accept';
    } else if (cancel) {
      action = 'close';
    }
    return (
      <button class="mdc-button" data-mdc-dialog-action={action} {...props}>
        {children}
      </button>
    );
  }
}
