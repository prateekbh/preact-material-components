import {MDCLinearProgress} from '@material/linear-progress';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ILinearProgressProps {
  indeterminate?: boolean;
  reversed?: boolean;
  progress?: number; // TODO: fix type in docs
}

export interface ILinearProgressState {}

export class LinearProgress extends MaterialComponent<
  ILinearProgressProps,
  ILinearProgressState
> {
  public MDComponent?: MDCLinearProgress;

  protected componentName = 'linear-progress';
  protected mdcProps = ['reversed', 'indeterminate'];
  protected themeProps = ['primary', 'secondary'];
  protected mdcNotifyProps = ['progress'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCLinearProgress(this.control);
      this.MDComponent.determinate = !this.props.indeterminate;
      this.MDComponent.reverse = !!this.props.reversed;
    }
    this.afterComponentDidMount();
  }

  public componentWillReceiveProps(nextProps: ILinearProgressProps) {
    super.componentWillReceiveProps(nextProps);
    if (this.MDComponent) {
      this.MDComponent.determinate = !this.props.indeterminate;
      this.MDComponent.reverse = !!nextProps.reversed;
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(props) {
    // TODO: Fix theme props
    return (
      <div role="progressbar" {...props} ref={this.setControlRef}>
        <div className="mdc-linear-progress__buffering-dots" />
        <div className="mdc-linear-progress__buffer" />
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
      </div>
    );
  }
}

export default LinearProgress;
