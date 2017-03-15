import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCRipple } from "../../node_modules/@material/ripple/";

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
    if (this.props.ripple) {
      MDCRipple.attachTo(this.btn);
    }
  }
  materialDom(props) {
    return (
      <button {...props} ref={btn => this.btn = btn}>
          {props.children}
      </button>
    );
  }
}
