import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';

export interface ISnackbarDismissProps {}

export interface ISnackbarDismissState {}

export class SnackbarDismiss extends MaterialComponent<
  ISnackbarDismissProps,
  ISnackbarDismissState
> {
  protected componentName = 'snackbar__dismiss';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <button type="button" class="mdc-button material-icons">
        {props.children}
      </button>
    );
  }
}
