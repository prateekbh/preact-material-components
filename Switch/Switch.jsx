import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop disabled = false
 */
export default class Switch extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "switch";
    this._mdcProps = ["disabled"];
  }
  materialDom(allprops) {
    const { className, ...props } = allprops;
    return (
      <div className={className}>
        <input
          type="checkbox"
          className="mdc-switch__native-control"
          {...props}
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
    );
  }
}
