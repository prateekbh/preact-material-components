import {MDCLinearProgress} from '@material/linear-progress';
import {h} from 'preact';
import {MDCComponent, MDCFoundation} from '../../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';

declare class MDCLinearProgressFoundation extends MDCFoundation<
  MDCLinearProgress
> {
  public setDeterminate(isDeterminate: boolean): void;
  public setProgress(value: number): void;
  public setBuffer(value: number): void;
  public setReverse(isReversed: boolean): void;
  public open(): void;
  public close(): void;
}
declare class MDCLinearProgress extends MDCComponent<
  MDCLinearProgressFoundation
> {
  public determinate: boolean;
  public progress: number;
  public buffer: number;
  public reverse: boolean;
  public open(): void;
  public close(): void;
}

export interface ILinearProgressProps extends JSX.HTMLAttributes {
  indeterminate?: boolean;
  reversed?: boolean;
  progress?: number;
}

export interface ILinearProgressState {}

/**
 * @prop indeterminate = false
 * @prop reversed = false
 */
export class LinearProgress extends MaterialComponent<
  ILinearProgressProps,
  ILinearProgressState
> {
  protected componentName = 'linear-progress';
  protected mdcProps = ['indeterminate', 'reversed'];
  protected MDComponent: MDCLinearProgress;

  public componentDidMount() {
    this.MDComponent = new MDCLinearProgress(this.control);
    updateProgress(this.props, this.MDComponent);
  }

  public componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }

  public componentWillUpdate(nextProps) {
    updateProgress(nextProps, this.MDComponent);
  }

  protected materialDom(props) {
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

function updateProgress(props, progressBar) {
  if (!props.indeterminate && props.progress) {
    progressBar.progress = props.progress;
  }
}

export default LinearProgress;
