import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Fab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "fab";
    this._mdcProps = ["mini", "plain"];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    return (
      <button {...props} ref={control => (this.control = control)}>
        {props.children}
      </button>
    );
  }
}
