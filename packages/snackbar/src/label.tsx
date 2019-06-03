import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';

export interface ISnackbarLabelProps {}

export interface ISnackbarLabelState {}

export class SnackbarLabel extends MaterialComponent<
  ISnackbarLabelProps,
  ISnackbarLabelState
> {
  protected componentName = 'snackbar__label';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div role="status" aria-live="polite">
        {props.children}
      </div>
    );
  }
}
