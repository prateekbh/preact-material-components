import {MDCDialog} from '@material/dialog';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './title';
export * from './actions';
export * from './action';
export * from './footer';
export * from './content';

export interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: JSX.GenericEventHandler;
  onCancel?: JSX.GenericEventHandler;
}

export interface IDialogState {}

export class Dialog extends MaterialComponent<IDialogProps, IDialogState> {
  public MDComponent?: MDCDialog;

  protected componentName = 'dialog';
  protected mdcProps = ['scrollable'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCDialog(this.control);
      // this.MDComponent.listen('MDCDialog:accept', this.onAccept);
      // this.MDComponent.listen('MDCDialog:cancel', this.onCancel);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      // this.MDComponent.unlisten('MDCDialog:accept', this.onAccept);
      // this.MDComponent.unlisten('MDCDialog:cancel', this.onCancel);
      this.MDComponent.destroy();
    }
  }

  // protected onAccept = e => {
  //   if (this.props.onAccept) {
  //     this.props.onAccept(e);
  //   }
  // }

  // protected onCancel = e => {
  //   if (this.props.onCancel) {
  //     this.props.onCancel(e);
  //   }
  // }

  protected materialDom(props) {
    return (
      <div
        role="alertdialog"
        aria-modal="true"
        ref={this.setControlRef}
        {...props}>
        <div class="mdc-dialog__container">
          <div className="mdc-dialog__surface">{props.children}</div>
        </div>
        <div class="mdc-dialog__scrim" />
      </div>
    );
  }
}
