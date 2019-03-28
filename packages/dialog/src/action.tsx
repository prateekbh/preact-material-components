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
    const {accept, cancel, children, props} = allProps;
    let actionString = 'false';
    if (accept) {
      actionString = 'accept';
    } else if (cancel) {
      actionString = 'close';
    }
    return (
      <button
        class="mdc-button"
        data-mdc-dialog-action={actionString}
        {...props}>
        {children}
      </button>
    );
  }
}
