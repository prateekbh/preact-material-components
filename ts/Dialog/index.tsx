import {MDCDialog} from '@material/dialog/';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {Button} from '../Button';

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

export interface IDialogFooterButtonProps {
  accept?: boolean;
  cancel?: boolean;
}

export interface IDialogFooterButtonState {}

export class DialogFooterButton extends Button<
  IDialogFooterButtonProps,
  IDialogFooterButtonState
> {
  protected componentName = 'dialog__footer__button';
  protected mdcProps = ['cancel', 'accept'];

  @bind
  protected materialDom(props) {
    return (
      <button {...props} className="mdc-button" ref={this.setControlRef}>
        {props.children}
      </button>
    );
  }
}

export interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: JSX.GenericEventHandler;
  onCancel?: JSX.GenericEventHandler;
}

export interface IDialogState {}

export class Dialog extends MaterialComponent<IDialogProps, IDialogState> {
  public MDComponent?: MDCDialog;

  protected componentName = 'dialog';
  protected mdcProps = [];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCDialog(this.control);
      this.MDComponent.listen('MDCDialog:accept', this.onAccept);
      this.MDComponent.listen('MDCDialog:cancel', this.onCancel);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCDialog:accept', this.onAccept);
      this.MDComponent.unlisten('MDCDialog:cancel', this.onCancel);
      this.MDComponent.destroy();
    }
  }

  @bind
  protected onAccept(e) {
    if (this.props.onAccept) {
      this.props.onAccept(e);
    }
  }

  @bind
  protected onCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }

  protected materialDom(props) {
    return (
      <aside role={'alertdialog'} ref={this.setControlRef} {...props}>
        <div className="mdc-dialog__surface">{props.children}</div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}

export default class extends Dialog {
  public static readonly Header = DialogHeader;
  public static readonly Body = DialogBody;
  public static readonly Footer = DialogFooter;
  public static readonly FooterButton = DialogFooterButton;
}
