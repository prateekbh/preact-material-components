import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import bind from 'bind-decorator';
import {h} from 'preact';

export interface IDialogBodyProps {
  scrollable?: boolean;
}

export interface IDialogBodyState {}

export class DialogBody extends MaterialComponent<
  IDialogBodyProps,
  IDialogBodyState
> {
  protected componentName = 'dialog__body';
  protected mdcProps = ['scrollable'];

  @bind
  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}
