import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';

export interface ISnackbarActionProps {}

export interface ISnackbarActionState {}

export class SnackbarAction extends MaterialComponent<
  ISnackbarActionProps,
  ISnackbarActionState
> {
  protected componentName = 'snackbar__action';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <button type="button" class="mdc-button">
        {props.children}
      </button>
    );
  }
}
