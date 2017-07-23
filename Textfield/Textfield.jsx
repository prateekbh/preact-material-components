import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTextfield } from "@material/textfield/";

/**
 * @prop persistent = false
 * @prop validation-msg = false
 */
class Helptext extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "textfield-helptext";
    this._mdcProps = ["persistent", "validation-msg"];
  }
  materialDom(props) {
    return (
      <p {...props} aria-hidden="true">
        {props.children}
      </p>
    );
  }
}

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop type = 'text'
 */
export default class Textfield extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "";
    this._mdcProps = ["fullwidth", "multiline", "dense", "disabled"];
  }
  componentDidMount() {
    this.MDComponent = new MDCTextfield(this.control);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(allprops) {
    const {
      className,
      helptextPersistent,
      helptextValidationMsg,
      ...props
    } = allprops;

    // Helper text
    const helptextProps = {
      persistent: helptextPersistent,
      "validation-msg": helptextValidationMsg
    };

    // Label
    const labelClass = ["mdc-textfield__label"];
    if (props.value) {
      labelClass.push("mdc-textfield__label--float-above");
    }

    // Component
    const inputClass = ["mdc-textfield"];
    if (className) {
      inputClass.push(className);
    }

    return (
      <div>
        <div className={inputClass} ref={control => (this.control = control)}>
          {props.multiline
            ? <textarea className="mdc-textfield__input" {...props} />
            : <input
                type={props.type || "text"}
                className="mdc-textfield__input"
                aria-controls={props.id + "-helptext"}
                {...props}
              />}
          {props.label &&
            <label className={labelClass.join(" ")}>
              {props.label}
            </label>}
        </div>
        {props.helptext &&
          <Helptext id={props.id + "-helptext"} {...helptextProps}>
            {props.helptext}
          </Helptext>}
      </div>
    );
  }
}
