import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';

export interface ISnackbarActionsProps {}

export interface ISnackbarActionsState {}

export class SnackbarActions extends MaterialComponent<
  ISnackbarActionsProps,
  ISnackbarActionsState
> {
  protected componentName = 'snackbar__actions';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div class="mdc-snackbar__actions">{props.children}</div>;
  }
}
