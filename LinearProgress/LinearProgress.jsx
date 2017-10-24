import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCLinearProgress } from "@material/linear-progress";

/**
 * @prop indeterminate = false
 * @prop reversed = false
 * @prop accent = false
 */
export default class LinearProgress extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "linear-progress";
    this._mdcProps = ["indeterminate", "reversed", "accent"];
  }
  componentDidMount() {
    this.MDComponent = new MDCLinearProgress(this.control);
    updateProgress(this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    updateProgress(nextProps, this.MDComponent);
  }
  materialDom(props) {
    return (
      <div
        role="progressbar"
        {...props}
        ref={control => (this.control = control)}
      >
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
