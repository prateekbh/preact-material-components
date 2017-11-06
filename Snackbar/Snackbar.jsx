import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSnackbar } from "@material/snackbar/";

function shallowDiffers(a, b) {
  for (let i in a) if (!(i in b)) return true;
  for (let i in b) if (a[i] !== b[i]) return true;
  return false;
}

/**
 * dismissesOnAction = true
 */
export default class Snackbar extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "snackbar";
    this.isPureReactComponent = true;
  }
  componentDidMount() {
    this.MDComponent = MDCSnackbar.attachTo(this.control);
    if (
      this.props.dismissesOnAction === undefined ||
      this.props.dismissesOnAction === null
    ) {
      this.MDComponent.dismissesOnAction = true;
    } else {
      this.MDComponent.dismissesOnAction = this.props.dismissesOnAction;
    }
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  shouldComponentUpdate(props, state) {
    return (
      shallowDiffers(this.props, props) || shallowDiffers(this.state, state)
    );
  }
  materialDom(props) {
    return (
      <div
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
        ref={control => (this.control = control)}
        {...props}
      >
        <div className="mdc-snackbar__text" />
        <div className="mdc-snackbar__action-wrapper">
          <button type="button" className="mdc-snackbar__action-button" />
        </div>
      </div>
    );
  }
}
