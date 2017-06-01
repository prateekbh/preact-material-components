import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSnackbar } from "@material/snackbar/";
/**
 * dismissesOnAction = true
 */
export default class Snackbar extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "snackbar";
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
          <button
            type="button"
            className="mdc-button mdc-snackbar__action-button"
          />
        </div>
      </div>
    );
  }
}
