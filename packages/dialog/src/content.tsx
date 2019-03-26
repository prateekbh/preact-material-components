import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IDialogContentProps {
  scrollable?: boolean;
}

export interface IDialogContentState {}

export class DialogContent extends MaterialComponent<
  IDialogContentProps,
  IDialogContentState
> {
  protected componentName = 'dialog__content';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}
