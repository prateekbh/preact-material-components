import {MDCSnackbar} from '@material/snackbar';
import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';

export * from './label';
export * from './actions';
export * from './action';
export * from './dismiss';

// TODO: Is that needed?
function shallowDiffers(a, b) {
  for (const i in a) {
    if (!(i in b)) {
      return true;
    }
  }
  for (const i in b) {
    // noinspection JSUnfilteredForInLoop
    if (a[i] !== b[i]) {
      return true;
    }
  }
  return false;
}

export interface ISnackbarOpenedEventDetail {
  MDComponent: MDCSnackbar;
}

export interface ISnackbarClosedEventDetail {
  MDComponent: MDCSnackbar;
  reason: string;
}

export interface ISnackbarProps {
  leading?: boolean;
  stacked?: boolean;
  onOpened?: (e: Event, detail: ISnackbarOpenedEventDetail) => void;
  onClosed?: (e: Event, detail: ISnackbarClosedEventDetail) => void;
}

export interface ISnackbarState {}

export class Snackbar extends MaterialComponent<
  ISnackbarProps,
  ISnackbarState
> {
  public MDComponent?: MDCSnackbar;

  protected componentName = 'snackbar';
  protected mdcProps = ['leading', 'stacked'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSnackbar(this.control);
      this.MDComponent.listen('MDCSnackbar:opened', this.onOpened);
      this.MDComponent.listen('MDCSnackbar:opened', this.onClosed);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCSnackbar:opened', this.onOpened);
      this.MDComponent.unlisten('MDCSnackbar:opened', this.onClosed);
      this.MDComponent.destroy();
    }
  }

  public shouldComponentUpdate(props, state) {
    return (
      shallowDiffers(this.props, props) || shallowDiffers(this.state, state)
    );
  }

  protected onOpened = e => {
    if (this.MDComponent) {
      this.proxyEventHandler('onOpened', e, {});
    }
  };
  protected onClosed = e => {
    const {reason} = e.detail;
    if (this.MDComponent) {
      this.proxyEventHandler('onClosed', e, {reason});
    }
  };

  protected materialDom(props) {
    return (
      <div aria-live="polite" ref={this.setControlRef} {...props}>
        <div class="mdc-snackbar__surface">{props.children}</div>
      </div>
    );
  }
}
