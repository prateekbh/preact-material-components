import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTextfield } from "../../node_modules/@material/textfield/";

export default class Fab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "textfield";
  }
  componentDidMount() {
    this.MDComponent = new MDCTextfield(this.control);
  }
  materialDom(props) {
    return (
      <div class="mdc-textfield" ref={control => this.control = control}>
        <input
          type="text"
          id="textfield-no-js"
          class="mdc-textfield__input"
          {...props}
        />
      </div>
    );
  }
}
