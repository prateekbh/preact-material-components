import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCIconToggle } from "mdc-icon-toggle";

/**
 * @prop disabled = false
 */
export default class IconToggle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "icon-toggle";
  }
  componentDidMount() {
    MDCIconToggle.attachTo(this.btn);
  }
  materialDom(props) {
    return (
      <i
        {...props}
        ref={btn => {
          this.btn = btn;
        }}
        class="mdc-icon-toggle material-icons"
        role="button"
      >
        favorite_border
      </i>
    );
  }
}
