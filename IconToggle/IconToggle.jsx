import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop disabled = false
 */
export default class IconToggle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "icon-toggle";
  }
  materialDom(props) {
    return (
      <i {...props} className="material-icons">
        {props.children}
      </i>
    );
  }
}
