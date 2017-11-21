import { h, Component } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTextField } from "@material/textfield";

/**
 * @prop persistent = false
 * @prop validation-msg = false
 */
class Helptext extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "text-field-helptext";
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
    this.componentName = "text-field__label";
  }
  materialDom(props) {
    return <label {...props}>{props.children}</label>;
  }
}

const defaultProps = {
  valid: true
};

/**
 * @prop fullwidth = false
 * @prop textarea = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
 */
class TextFieldInput extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "text-field";
    this._mdcProps = ["fullwidth", "textarea", "dense", "disabled", "box"];
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
        this.MDComponent = new MDCTextField(this.control);
        this.props.onInit && this.props.onInit(this.MDComponent);
        setValid(defaultProps, this.props, this.MDComponent);
      }
    );
  }
  componentWillUpdate(nextProps) {
    setValid(this.props, nextProps, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent && this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(allprops) {
    let { className, ...props } = allprops;

    if ("value" in props && this.state.showFloatingLabel) {
      className = [className, "mdc-text-field--upgraded"].join(" ");
    }

    return (
      <div className={className} ref={control => (this.control = control)}>
        {props.textarea ? (
          <textarea className="mdc-text-field__input" {...props} />
        ) : (
          <input
            type={props.type || "text"}
            className="mdc-text-field__input"
            {...props}
          />
        )}
        {props.label &&
          this.state.showFloatingLabel && (
            <Label for={props.id}>{props.label}</Label>
          )}
        {props.textarea ? "" : <div class="mdc-text-field__bottom-line" />}
      </div>
    );
  }
}

/**
 * @prop fullwidth = false
 * @prop textarea = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
 * @prop helptext = ''
 * @prop helptextPersistent = false
 * @prop helptextValidationMsg = false
 */
class TextField extends Component {
  constructor() {
    super();
    this.id = TextField.uid();
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
      className,
      helptextPersistent,
      helptextValidationMsg,
      ...props
    } = allprops;
    const showDiv = props.helptext || (props.label && !showFloatingLabel);

    if (showDiv && !props.id) {
      props.id = "tf-" + this.id;
    }

    // Helper text
    const helptextProps = {
      persistent: helptextPersistent,
      "validation-msg": helptextValidationMsg
    };

    return showDiv ? (
      <div className={className}>
        {props.label &&
          !showFloatingLabel && (
            <label for={props.id}>{props.cssLabel || `${props.label}: `}</label>
          )}
        <TextFieldInput
          {...props}
          onInit={MDComponent => {
            this.MDComponent = MDComponent;
          }}
          aria-controls={props.helptext && props.id + "-helptext"}
        />
        {props.helptext && (
          <Helptext id={props.id + "-helptext"} {...helptextProps}>
            {props.helptext}
          </Helptext>
        )}
      </div>
    ) : (
      <TextFieldInput
        {...props}
        className={className}
        onInit={MDComponent => {
          this.MDComponent = MDComponent;
        }}
      />
    );
  }
}

function setValid(oldprops, newprops, textfield) {
  if (
    "valid" in oldprops &&
    "valid" in newprops &&
    oldprops.valid !== newprops.valid
  ) {
    textfield.valid = newprops.valid;
  }
}

TextField.Helptext = Helptext;

export default TextField;
