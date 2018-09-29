import {MDCSnackbar} from '@material/snackbar/';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

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

export interface ISnackbarProps {
  dismissesOnAction?: boolean;
}

export interface ISnackbarState {}

export class Snackbar extends MaterialComponent<
  ISnackbarProps,
  ISnackbarState
> {
  public MDComponent?: MDCSnackbar;

  protected componentName = 'snackbar';
  protected mdcProps = [];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSnackbar(this.control);
      if (
        this.props.dismissesOnAction === undefined ||
        this.props.dismissesOnAction === null
      ) {
        this.MDComponent.dismissesOnAction = true;
      } else {
        this.MDComponent.dismissesOnAction = this.props.dismissesOnAction;
      }
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  public shouldComponentUpdate(props, state) {
    return (
      shallowDiffers(this.props, props) || shallowDiffers(this.state, state)
    );
  }

  protected materialDom(props) {
    return (
      <div
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
        ref={this.setControlRef}
        {...props}>
        <div className="mdc-snackbar__text" />
        <div className="mdc-snackbar__action-wrapper">
          <button type="button" className="mdc-snackbar__action-button" />
        </div>
      </div>
    );
  }
}

export default Snackbar;
