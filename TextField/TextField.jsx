import {Component, h} from 'preact';

import Icon from '../Icon';
import {MDCTextField} from '@material/textfield';
import MaterialComponent from '../MaterialComponent';

/**
 * @prop persistent = false
 * @prop validation-msg = false
 */
class HelperText extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'text-field-helper-text';
    this._mdcProps = ['persistent', 'validation-msg'];
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
    this.componentName = 'floating-label';
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
    this.componentName = 'text-field';
    this._mdcProps = ['fullwidth', 'textarea', 'dense', 'disabled', 'box'];
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
  getValue() {
    return this.MDComponent ? this.MDComponent.value : null;
  }
  materialDom(allprops) {
    let {className, ...props} = allprops;
    className = className || '';

    if ('leadingIcon' in props) {
      className += ' mdc-text-field--box mdc-text-field--with-leading-icon';
    }

    if ('trailingIcon' in props) {
      className += ' mdc-text-field--box mdc-text-field--with-trailing-icon';
    }

    if ('value' in props && this.state.showFloatingLabel) {
      className = [className, 'mdc-text-field--upgraded'].join(' ');
    }
    if (props.label && props.fullwidth) {
      console.log(
        'Passing a "label" prop is not supported when using a "fullwidth" text field.'
      );
    }

    return (
      <div className={className} ref={this.setControlRef}>
        {props.leadingIcon ? (
          <Icon className="mdc-text-field__icon">{props.leadingIcon}</Icon>
        ) : null}
        {props.textarea ? (
          <textarea className="mdc-text-field__input" {...props} />
        ) : (
          <input
            type={props.type || 'text'}
            className="mdc-text-field__input"
            {...props}
          />
        )}
        {props.label &&
          this.state.showFloatingLabel && (
            <Label for={props.id}>{props.label}</Label>
          )}
        {props.trailingIcon ? (
          <Icon className="mdc-text-field__icon">{props.trailingIcon}</Icon>
        ) : null}
        {props.textarea ? '' : <div class="mdc-line-ripple" />}
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
 * @prop helperText = ''
 * @prop helperTextPersistent = false
 * @prop helperTextValidationMsg = false
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

  render(allprops, {showFloatingLabel}) {
    const {
      className,
      helperTextPersistent,
      helperTextValidationMsg,
      ...props
    } = allprops;
    const showDiv = props.helperText || (props.label && !showFloatingLabel);

    if (showDiv && !props.id) {
      props.id = 'tf-' + this.id;
    }

    // Helper text
    const helperTextProps = {
      persistent: helperTextPersistent,
      'validation-msg': helperTextValidationMsg
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
          aria-controls={props.helperText && props.id + '-helper-text'}
        />
        {props.helperText && (
          <HelperText id={props.id + '-helper-text'} {...helperTextProps}>
            {props.helperText}
          </HelperText>
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
    'valid' in oldprops &&
    'valid' in newprops &&
    oldprops.valid !== newprops.valid
  ) {
    textfield.valid = newprops.valid;
  }
}

TextField.Helptext = HelperText;

export default TextField;
