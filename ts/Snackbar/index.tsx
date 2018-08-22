import {MDCSnackbar} from '@material/snackbar/';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {IMDRef} from '../Base/types';

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
  ref?: IMDRef<MDCSnackbar>;
}

export interface ISnackbarState {}

export class Snackbar extends MaterialComponent<
  ISnackbarProps,
  ISnackbarState
> {
  public readonly isPureReactComponent = true;
  protected componentName = 'snackbar';
  protected mdcProps = [];
  protected MDComponent?: MDCSnackbar;

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

  @autobind
  protected materialDom(allprops) {
    const {ref, ...props} = allprops;
    return (
      <div
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
        ref={this.getSharedRefSetter(ref)}
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
