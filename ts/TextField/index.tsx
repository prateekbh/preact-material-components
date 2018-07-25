import {Component, h} from 'preact';

import {MDCTextField} from '@material/textfield';
import Icon from '../Icon/index';
import MaterialComponent from '../Base/MaterialComponent';

export interface IHelperTextProps extends JSX.HTMLAttributes {
  persistent?: boolean;
  'validation-msg'?: boolean;
}

export interface IHelperTextState {}

/**
 * @prop persistent = false
 * @prop validation-msg = false
 */
export class HelperText extends MaterialComponent<
  IHelperTextProps,
  IHelperTextState
> {
  protected componentName = 'text-field-helper-text';
  protected mdcProps = ['persistent', 'validation-msg'];

  protected materialDom(props) {
    return (
      <p {...props} aria-hidden="true">
        {props.children}
      </p>
    );
  }
}

interface ILabelProps {}

interface ILabelState {}

class Label extends MaterialComponent<ILabelProps, ILabelState> {
  protected componentName = 'floating-label';
  protected mdcProps = [];

  protected materialDom(props) {
    return <label {...props}>{props.children}</label>;
  }
}

interface ITextFieldInputProps extends JSX.HTMLAttributes {
  fullwidth?: boolean;
  textarea?: boolean;
  dense?: boolean;
  box?: boolean;
  outlined?: boolean;
  cssLabel?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  outerStyle?: {[key: string]: string};
  onInit: (c: MDCTextField) => void;
}

interface ITextFieldInputState {
  showFloatingLabel: boolean;
}

/**
 * @prop fullwidth = false
 * @prop textarea = false
 * @prop dense = false
 * @prop disabled = false
 * @prop outlined = false
 * @prop box = false
 * @prop type = 'text'
 * @prop outerStyle = {}
 * @prop value = ''
 * @prop label = ''
 */
class TextFieldInput extends MaterialComponent<
  ITextFieldInputProps,
  ITextFieldInputState
> {
  public static readonly defaultProps = {
    valid: true
  };
  protected MDComponent: MDCTextField;

  protected componentName = 'text-field';
  protected mdcProps = [
    'fullwidth',
    'textarea',
    'dense',
    'disabled',
    'box',
    'outlined'
  ];

  constructor() {
    super();
    this.state = {
      showFloatingLabel: false
    };
  }

  public componentDidMount() {
    this.setState(
      {
        showFloatingLabel: true
      },
      () => {
        this.MDComponent = new MDCTextField(this.control);
        if (this.props.onInit) {
          this.props.onInit(this.MDComponent);
        }
        setValid({valid: true}, this.props, this.MDComponent);
      }
    );
  }

  public componentWillUpdate(nextProps) {
    setValid(this.props, nextProps, this.MDComponent);
  }

  public componentWillUnmount() {
    if (this.MDComponent && this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  public getValue() {
    return this.MDComponent ? this.MDComponent.value : null;
  }

  protected materialDom(allprops) {
    let {className, outerStyle, outlined, ...props} = allprops;
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

    // noinspection RequiredAttributes
    return (
      <div className={className} ref={this.setControlRef} style={outerStyle}>
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
        {props.textarea || outlined ? null : <div class="mdc-line-ripple" />}
        {outlined ? (
          <div class="mdc-notched-outline">
            <svg>
              <path className="mdc-notched-outline__path" />
            </svg>
          </div>
        ) : null}
        {outlined ? <div className="mdc-notched-outline__idle" /> : null}
      </div>
    );
  }
}

export interface ITextFieldProps extends JSX.HTMLAttributes {
  fullwidth?: boolean;
  textarea?: boolean;
  dense?: boolean;
  box?: boolean;
  outlined?: boolean;
  helperText?: string;
  helperTextPersistent?: boolean;
  helperTextValidationMsg?: boolean;
  cssLabel?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  outerStyle?: {[key: string]: string};
}

export interface ITextFieldState {
  showFloatingLabel: boolean;
}

/**
 * @prop fullwidth = false
 * @prop textarea = false
 * @prop dense = false
 * @prop disabled = false
 * @prop outlined = false
 * @prop box = false
 * @prop type = 'text'
 * @prop outerStyle = {}
 * @prop value = ''
 * @prop label = ''
 * @prop helperText = ''
 * @prop helperTextPersistent = false
 * @prop helperTextValidationMsg = false
 */
class TextField extends Component<ITextFieldProps, ITextFieldState> {
  public static readonly defaultProps = {
    outerStyle: {}
  };

  public static readonly HelperText = HelperText;
  protected static uidCounter = 0;

  protected static uid() {
    return ++this.uidCounter;
  }

  protected readonly id = TextField.uid();
  protected MDComponent?: MDCTextField;

  constructor() {
    super();
    this.state = {
      showFloatingLabel: false
    };
  }

  public componentDidMount() {
    this.setState({
      showFloatingLabel: true
    });
  }

  public render(allprops, {showFloatingLabel}) {
    const {
      className,
      outerStyle,
      helperTextPersistent,
      helperTextValidationMsg,
      ...props
    } = allprops;
    const showDiv = props.helperText || (props.label && !showFloatingLabel);

    if ((props.helperText || props.label) && !props.id) {
      props.id = `tf-${this.id}`;
    }

    // Helper text
    const helperTextProps = {
      persistent: helperTextPersistent,
      'validation-msg': helperTextValidationMsg
    };

    return showDiv ? (
      <div className={className} style={outerStyle}>
        {props.label &&
          !showFloatingLabel && (
            <label for={props.id}>{props.cssLabel || `${props.label}: `}</label>
          )}
        <TextFieldInput
          {...props}
          onInit={MDComponent => {
            this.MDComponent = MDComponent;
          }}
          aria-controls={props.helperText && `${props.id}-helper-text`}
        />
        {props.helperText && (
          <HelperText id={`${props.id}-helper-text`} {...helperTextProps}>
            {props.helperText}
          </HelperText>
        )}
      </div>
    ) : (
      <TextFieldInput
        {...props}
        className={className}
        outerStyle={outerStyle}
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

export default TextField;
