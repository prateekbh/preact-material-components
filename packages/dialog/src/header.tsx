import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import bind from 'bind-decorator';
import {h} from 'preact';

export interface IDialogHeaderProps {}

export interface IDialogHeaderState {}

export class DialogHeader extends MaterialComponent<
  IDialogHeaderProps,
  IDialogHeaderState
> {
  protected componentName = 'dialog__header';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return (
      <header {...props}>
        <h2 className="mdc-dialog__header__title">{props.children}</h2>
      </header>
    );
  }
}
