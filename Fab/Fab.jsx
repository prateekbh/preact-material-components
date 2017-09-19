import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon/";

/**
 * @prop mini = false
 * @prop exited = false
 */
class Fab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "fab";
    this._mdcProps = ["mini", "exited"];
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

class FabIcon extends Icon {
  constructor() {
    super();
    this.componentName = "fab__icon";
  }
}

Fab.Icon = FabIcon;
export default Fab;
