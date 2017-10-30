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
    return <label {...props}>{props.children}</label>;
  }
}

const defaultProps = {
  valid: true
};

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
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
      className = [className, "mdc-textfield--upgraded"].join(" ");
    }

    return (
      <div className={className} ref={control => (this.control = control)}>
        {props.multiline ? (
          <textarea className="mdc-textfield__input" {...props} />
        ) : (
          <input
            type={props.type || "text"}
            className="mdc-textfield__input"
            {...props}
          />
        )}
        {props.label &&
        this.state.showFloatingLabel && (
          <Label for={props.id}>{props.label}</Label>
        )}
        {props.multiline ? "" : <div class="mdc-textfield__bottom-line" />}
      </div>
    );
  }
}

/**
 * @prop fullwidth = false
 * @prop multiline = false
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
        <TextfieldInput
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
      <TextfieldInput
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

Textfield.Helptext = Helptext;

export default Textfield;
