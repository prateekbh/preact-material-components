import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSnackbar } from "../../node_modules/@material/snackbar/";
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
    this.foundation = MDCSnackbar.attachTo(this.bar).foundation_;
  }

  materialDom(props) {
    return (
      <div
        class="mdc-snackbar"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
        ref={bar => this.bar = bar}
      >
        <div class="mdc-snackbar__text" />
        <div class="mdc-snackbar__action-wrapper">
          <button
            type="button"
            class="mdc-button mdc-snackbar__action-button"
          />
        </div>
      </div>
    );
  }
}
