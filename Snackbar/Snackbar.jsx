import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSnackbar } from "@material/snackbar/";
/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Snackbar extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "snackbar";
  }
  componentDidMount() {
    this.MDComponent = MDCSnackbar.attachTo(this.control);
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
