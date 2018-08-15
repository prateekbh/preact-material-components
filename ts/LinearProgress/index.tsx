import {MDCLinearProgress} from '@material/linear-progress';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {IMDRef} from '../Base/types';

export interface ILinearProgressProps {
  indeterminate?: boolean;
  reversed?: boolean;
  progress?: number; // TODO: fix type in docs
  ref?: IMDRef<MDCLinearProgress>;
}

export interface ILinearProgressState {}

export class LinearProgress extends MaterialComponent<
  ILinearProgressProps,
  ILinearProgressState
> {
  protected componentName = 'linear-progress';
  protected mdcProps = ['indeterminate', 'reversed'];
  protected themeProps = ['primary', 'secondary'];
  protected MDComponent?: MDCLinearProgress;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCLinearProgress(this.control);
      updateProgress(this.props, this.MDComponent);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    updateProgress(nextProps, this.MDComponent);
  }

  @autobind
  protected materialDom(allprops) {
    const {ref, ...props} = allprops;
    // TODO: Fix theme props
    return (
      <div role="progressbar" {...props} ref={this.getSharedRefSetter(ref)}>
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
