import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop disabled = false
 */
export default class Icon extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "icon";
  }
  materialDom(props) {
    return (
      <i {...props} className="material-icons">
        {props.children}
      </i>
    );
  }
}
