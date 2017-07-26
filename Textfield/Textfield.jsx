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
class TextfieldInput extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "textfield";
    this._mdcProps = ["fullwidth", "multiline", "dense", "disabled", "box"];
    this.state = {
      showFloatingLabel: false
    };
  }
  componentDidMount() {
    this.setState(
      {
        showFloatingLabel: true
      },
      () => {
        this.MDComponent = new MDCTextfield(this.control);
      }
    );
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(allprops) {
    const { className, ...props } = allprops;

    // Label
    const labelClass = ["mdc-textfield__label"];
    if (props.value) {
      labelClass.push("mdc-textfield__label--float-above");
    }

    return (
      <div className={className} ref={control => (this.control = control)}>
        {props.multiline
          ? <textarea
              className="mdc-textfield__input"
              aria-controls={props.id + "-helptext"}
              {...props}
            />
          : <input
              type={props.type || "text"}
              className="mdc-textfield__input"
              aria-controls={props.id + "-helptext"}
              {...props}
            />}
        {props.label &&
          this.state.showFloatingLabel &&
          <label className={labelClass.join(" ")} for={props.id}>
            {props.label}
          </label>}
      </div>
    );
  }
}

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop type = 'text'
 * @prop helptext = ''
 * @prop helptextPersistent = false
 * @prop helptextValidationMsg = false
 */
export default class Textfield {
  constructor() {
    this.id = Textfield.uid();
  }

  static uid() {
    if (!this.uidCounter) {
      this.uidCounter = 0;
    }
    return ++this.uidCounter;
  }

  render(allprops) {
    const {
      id,
      className,
      helptextPersistent,
      helptextValidationMsg,
      ...props
    } = allprops;
    const tfId = id || "tf-" + this.id;

    // Helper text
    const helptextProps = {
      persistent: helptextPersistent,
      "validation-msg": helptextValidationMsg
    };

    return props.helptext
      ? <div className={className}>
          <TextfieldInput {...props} id={tfId} />
          <Helptext id={tfId + "-helptext"} {...helptextProps}>
            {props.helptext}
          </Helptext>
        </div>
      : <TextfieldInput className={className} {...props} />;
  }
}
