import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import bind from 'bind-decorator';
import {h} from 'preact';

export interface IDialogFooterProps {}

export interface IDialogFooterState {}

export class DialogFooter extends MaterialComponent<
  IDialogFooterProps,
  IDialogFooterState
> {
  protected componentName = 'dialog__footer';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <footer {...props}>{props.children}</footer>;
  }
}
