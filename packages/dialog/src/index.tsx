import {MDCDialog} from '@material/dialog';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {bind} from 'bind-decorator';
import {h} from 'preact';

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
      <section role={'alertdialog'} ref={this.setControlRef} {...props}>
        <div className="mdc-dialog__surface">{props.children}</div>
        <div className="mdc-dialog__backdrop" />
      </section>
    );
  }
}
