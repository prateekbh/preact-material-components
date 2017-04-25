import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Formfield extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "form-field";
    this._mdcProps = ["align-end"];
  }
}
