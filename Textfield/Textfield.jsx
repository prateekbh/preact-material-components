import { h, Component } from "preact";
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

class Label extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "textfield__label";
  }
  materialDom(props) {
    return (
      <label {...props}>
        {props.children}
      </label>
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
    let { className, ...props } = allprops;

    if (props.value && this.state.showFloatingLabel) {
      className = [className, "mdc-textfield--upgraded"].join(" ");
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
          <Label
            for={props.id}
            className={props.value && "mdc-textfield__label--float-above"}
          >
            {props.label}
          </Label>}
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
class Textfield extends Component {
  constructor() {
    super();
    this.id = Textfield.uid();
    this.state = {
      showFloatingLabel: false
    };
  }

  componentDidMount() {
    this.setState({
      showFloatingLabel: true
    });
  }

  static uid() {
    if (!this.uidCounter) {
      this.uidCounter = 0;
    }
    return ++this.uidCounter;
  }

  render(allprops, { showFloatingLabel }) {
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

    const showDiv = props.helptext || props.label & !showFloatingLabel;

    return showDiv
      ? <div className={className}>
          {props.label &&
            !showFloatingLabel &&
            <label for={tfId}>
              {props.cssLabel || `${props.label}: `}
            </label>}
          <TextfieldInput {...props} id={tfId} />
          {props.helptext &&
            <Helptext id={tfId + "-helptext"} {...helptextProps}>
              {props.helptext}
            </Helptext>}
        </div>
      : <TextfieldInput {...props} id={tfId} className={className} />;
  }
}

Textfield.Helptext = Helptext;

export default Textfield;
