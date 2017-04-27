import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTextfield } from "@material/textfield/";

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop type = 'text'
 */
export default class Textfield extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "textfield";
    this.state = {
      showFloatingLabel: false
    };
    this._mdcProps = ["fullwidth", "multiline"];
  }
  componentDidMount() {
    this.setState({
      showFloatingLabel: true
    });
    this.MDComponent = new MDCTextfield(this.control);
  }
  materialDom(allprops) {
    const { className, ...props } = allprops;
    return (
      <div className={className + ""} ref={control => (this.control = control)}>
        {props.multiline
          ? <textarea className="mdc-textfield__input" {...props} />
          : <input type={props.type || 'text'} className="mdc-textfield__input" {...props} />}
        {props.label &&
          this.state.showFloatingLabel &&
          <label className="mdc-textfield__label">
            {props.label}
          </label>}
      </div>
    );
  }
}
