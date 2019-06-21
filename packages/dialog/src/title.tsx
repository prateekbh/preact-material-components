import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IDialogTitleProps {}

export interface IDialogTitleState {}

export class DialogTitle extends MaterialComponent<
  IDialogTitleProps,
  IDialogTitleState
> {
  protected componentName = 'dialog__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <h2 {...props}>{props.children}</h2>;
  }
}
