import { h } from "preact";
import { MDCIconToggle } from "@material/icon-toggle/";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop disabled = false
 */
export default class IconToggle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "icon-toggle";
  }
  componentDidMount() {
    this.MDComponent = new MDCIconToggle(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(props) {
    if (props["data-toggle-on"])
      props["data-toggle-on"] = JSON.stringify(props["data-toggle-on"]);
    if (props["data-toggle-off"])
      props["data-toggle-off"] = JSON.stringify(props["data-toggle-off"]);
    return (
      <i
        {...props}
        className="material-icons"
        ref={control => {
          this.control = control;
        }}
      >
        {props.children}
      </i>
    );
  }
}
