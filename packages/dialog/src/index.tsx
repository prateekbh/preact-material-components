import {MDCDialog} from '@material/dialog';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './title';
export * from './actions';
export * from './action';
export * from './content';

export interface IDialogProps extends JSX.HTMLAttributes {
  onOpen?: JSX.GenericEventHandler;
  onClose?: JSX.GenericEventHandler;
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
      this.MDComponent.listen('MDCDialog:opened', this.onOpened);
      this.MDComponent.listen('MDCDialog:closed', this.onClosed);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCDialog:opened', this.onOpened);
      this.MDComponent.unlisten('MDCDialog:closed', this.onClosed);
      this.MDComponent.destroy();
    }
  }

  protected onOpened = e => {
    this.proxyEventHandler('onOpen', e);
  };

  protected onClosed = e => {
    const {action} = e.detail;
    this.proxyEventHandler('onClose', e, {action});
  };

  protected materialDom(props) {
    return (
      <section
        role="alertdialog"
        aria-modal="true"
        ref={this.setControlRef}
        {...props}>
        <div class="mdc-dialog__container">
          <div className="mdc-dialog__surface">{props.children}</div>
        </div>
        <div class="mdc-dialog__scrim" />
      </section>
    );
  }
}
