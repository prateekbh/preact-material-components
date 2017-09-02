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
      showFloatingLabel: false,
      isFocused: false
    };
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
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
    this.MDComponent && this.MDComponent.destroy && this.MDComponent.destroy();
  }
  
  _onFocus() {
    this.setState({
      isFocused: true
    });
  }

  _onBlur() {
    this.setState({
      isFocused: false
    });
  }

  materialDom(allprops, { showFloatingLabel, isFocused }) {
    let { className, ...props } = allprops;
    const upgrade = props.value || isFocused;

    if (showFloatingLabel && upgrade) {
      className = [className, "mdc-textfield--upgraded"].join(" ");
    }

    return (
      <div className={className} ref={control => (this.control = control)}>
        {props.multiline
          ? <textarea
              className="mdc-textfield__input"
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              {...props}
            />
          : <input
              type={props.type || "text"}
              className="mdc-textfield__input"
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              {...props}
            />}
        {props.label &&
          this.state.showFloatingLabel &&
          <Label
            for={props.id}
            className={upgrade && "mdc-textfield__label--float-above"}
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

  _setInputRef(ref) {
    if (ref) {
      this.input = ref;
      this.MDComponent = ref.MDComponent;
    }
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

    props.ref = this._setInputRef;

    // Helper text
    const helptextProps = {
      persistent: helptextPersistent,
      "validation-msg": helptextValidationMsg
    };

    return showDiv
      ? <div className={className}>
          {props.label &&
            !showFloatingLabel &&
            <label for={props.id}>
              {props.cssLabel || `${props.label}: `}
            </label>}
          <TextfieldInput {...props} aria-controls={props.helptext && props.id + "-helptext"} />
          {props.helptext &&
            <Helptext id={props.id + "-helptext"} {...helptextProps}>
              {props.helptext}
            </Helptext>}
        </div>
      : <TextfieldInput {...props} className={className} />;
  }
}

Textfield.Helptext = Helptext;

export default Textfield;
