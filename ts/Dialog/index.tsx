import {MDCDialog} from '@material/dialog/';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {Omit} from '../Base/types';
import Button from '../Button/index';

export interface IDialogHeaderProps {}

export interface IDialogHeaderState {}

class DialogHeader extends MaterialComponent<
  IDialogHeaderProps,
  IDialogHeaderState
> {
  protected componentName = 'dialog__header';
  protected mdcProps = [];

  @autobind
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

/**
 * @prop scrollable = false
 */
class DialogBody extends MaterialComponent<IDialogBodyProps, IDialogBodyState> {
  protected componentName = 'dialog__body';
  protected mdcProps = ['scrollable'];

  @autobind
  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

export interface IDialogFooterProps {}

export interface IDialogFooterState {}

class DialogFooter extends MaterialComponent<
  IDialogFooterProps,
  IDialogFooterState
> {
  protected componentName = 'dialog__footer';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return <footer {...props}>{props.children}</footer>;
  }
}

export interface IDialogFooterButtonProps
  extends Omit<JSX.HTMLAttributes, 'accept'> {
  accept?: boolean;
  cancel?: boolean;
}

export interface IDialogFooterButtonState {}

/**
 * @prop cancel = false
 * @prop accept = false
 */
class DialogFooterButton extends Button<
  IDialogFooterButtonProps,
  IDialogFooterButtonState
> {
  protected componentName = 'dialog__footer__button';
  protected mdcProps = ['cancel', 'accept'];

  @autobind
  protected materialDom(props) {
    return (
      <button {...props} className="mdc-button" ref={this.setControlRef}>
        {props.children}
      </button>
    );
  }
}

export interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: (e: Event) => void;
  onCancel?: (e: Event) => void;
}

export interface IDialogState {}

class Dialog extends MaterialComponent<IDialogProps, IDialogState> {
  public static readonly Header = DialogHeader;
  public static readonly Body = DialogBody;
  public static readonly Footer = DialogFooter;
  public static readonly FooterButton = DialogFooterButton;

  protected componentName = 'dialog';
  protected mdcProps = [];
  protected MDComponent: MDCDialog;

  @autobind
  public componentDidMount() {
    this.MDComponent = new MDCDialog(this.control);
    this.MDComponent.listen('MDCDialog:accept', this.onAccept);
    this.MDComponent.listen('MDCDialog:cancel', this.onCancel);
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCDialog:accept', this.onAccept);
    this.MDComponent.unlisten('MDCDialog:cancel', this.onCancel);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  @autobind
  protected onAccept(e) {
    if (this.props.onAccept) {
      this.props.onAccept(e);
    }
  }

  @autobind
  protected onCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }

  @autobind
  protected materialDom(props) {
    return (
      <aside role={'alertdialog'} ref={this.setControlRef} {...props}>
        <div className="mdc-dialog__surface">{props.children}</div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}

export default Dialog;
