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
    let classes = ["material-icons"];
    if (props.className) {
      classes.push(props.className);
    }
    return (
      <i {...props} className={classes.join(" ")}>
        {props.children}
      </i>
    );
  }
}
