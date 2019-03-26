import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IDialogActionsProps {
  scrollable?: boolean;
}

export interface IDialogActionsState {}

export class DialogActions extends MaterialComponent<
  IDialogActionsProps,
  IDialogActionsState
> {
  protected componentName = 'dialog__actions';
  protected mdcProps = [];

  protected materialDom(props) {
    return <footer {...props}>{props.children}</footer>;
  }
}
