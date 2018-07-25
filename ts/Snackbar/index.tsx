import {MDCSnackbar} from '@material/snackbar/';
import {h} from 'preact';
import {MDCComponent, MDCFoundation} from '../../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';

interface ISnackbarData {
  message: string;
  multiline?: boolean;
  actionOnBottom?: boolean;
  timeout?: number;
  actionHandler?: () => void;
  actionText?: string;
}

declare class MDCSnackbarFoundation extends MDCFoundation<MDCSnackbar> {
  public active: boolean;
  public dismissesOnAction(): boolean;
  public setDismissOnAction(dismissOnAction: boolean): void;
  public show(data: ISnackbarData): void;
}

declare class MDCSnackbar extends MDCComponent<MDCSnackbarFoundation> {
  public dismissesOnAction: boolean;
  public show(data: ISnackbarData): void;
}

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

export interface ISnackbarProps extends JSX.HTMLAttributes {
  dismissesOnAction?: boolean;
}

export interface ISnackbarState {}

/**
 * dismissesOnAction = true
 */
export class Snackbar extends MaterialComponent<
  ISnackbarProps,
  ISnackbarState
> {
  public readonly isPureReactComponent = true;
  protected componentName = 'snackbar';
  protected mdcProps = [];
  protected MDComponent: MDCSnackbar;

  public componentDidMount() {
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

  public componentWillUnmount() {
    if (this.MDComponent.destroy) {
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
