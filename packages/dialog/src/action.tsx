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
    const {props, accept, cancel} = allProps;
    let actionString = '';
    if (accept) {
      actionString = 'data-mdc-dialog-action=yes';
    } else if (cancel) {
      actionString = 'data-mdc-dialog-action=no';
    }
    return (
      <button class="mdc-button" {...actionString} {...props}>
        {props.children}
      </button>
    );
  }
}
