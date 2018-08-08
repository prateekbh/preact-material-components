import {MDCTextField} from '@material/textfield';
import autobind from 'autobind-decorator';
import {Component, h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {ITypedEvent, OptPromise} from '../Base/types';
import Icon from '../Icon';

export interface IHelperTextProps {
  persistent?: boolean;
  'validation-msg'?: boolean;
}

export interface IHelperTextState {}

export class HelperText extends MaterialComponent<
  IHelperTextProps,
  IHelperTextState
> {
  protected componentName = 'text-field-helper-text';
  protected mdcProps = ['persistent', 'validation-msg'];

  @autobind
  protected materialDom(props) {
    return (
      <p {...props} aria-hidden="true">
        {props.children}
      </p>
    );
  }
}

export interface ILabelProps {}

export interface ILabelState {}

export class Label extends MaterialComponent<ILabelProps, ILabelState> {
  protected componentName = 'floating-label';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return <label {...props}>{props.children}</label>;
  }
}

export interface ITextFieldInputProps {
  fullwidth?: boolean;
  textarea?: boolean;
  dense?: boolean;
  box?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  cssLabel?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  outerStyle?: {[key: string]: string};
  validate?: (
    value: string,
    target: HTMLInputElement,
    event: ITypedEvent<HTMLInputElement>
  ) => undefined | OptPromise<boolean | {value: boolean; message?: string}>;
  validateOnKeys?: boolean;

  onInit: (c: MDCTextField) => any | void;
}

export interface ITextFieldInputState {
  showFloatingLabel: boolean;
}

export class TextFieldInput extends MaterialComponent<
  ITextFieldInputProps,
  ITextFieldInputState
> {
  public static readonly defaultProps = {
    valid: true
  };

  public state = {
    showFloatingLabel: false
  };
  protected MDComponent?: MDCTextField;

  protected componentName = 'text-field';
  protected mdcProps = [
    'fullwidth',
    'textarea',
    'dense',
    'disabled',
    'box',
    'outlined'
  ];

  public componentDidMount() {
    super.componentDidMount();
    this.setState(
      {
        showFloatingLabel: true
      },
      () => {
        if (this.control) {
          this.MDComponent = new MDCTextField(this.control);
          if (this.props.onInit) {
            this.props.onInit(this.MDComponent);
          }
          setValid({valid: true}, this.props, this.MDComponent);
        }
      }
    );
  }

  public componentWillUpdate(nextProps) {
    setValid(this.props, nextProps, this.MDComponent);
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  @autobind
  public getValue() {
    return this.MDComponent ? this.MDComponent.value : null;
  }

  @autobind
  protected materialDom(allprops) {
    let {
      className,
      outerStyle,
      outlined,
      valid,
      validate,
      validateOnKeys,
      ...props
    } = allprops;
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

    if (typeof valid === 'boolean' && validate) {
      console.error(
        'Passing a "valid" prop is not supported when using a "validate" text field. "valid" will be overwritten!'
      );
    }
    if (validate) {
      const validationFunction = async event => {
        let ret = await validate(event.target.value, event.target, event);
        if (typeof ret === 'boolean') {
          ret = {valid: ret} as {valid: boolean};
        }
        if (ret) {
          if (ret.valid && ret.message) {
            event.target.setCustomValidity(ret.message);
          } else {
            event.target.setCustomValidity('');
          }
          if (ret.valid) {
            if (this.MDComponent) {
              this.MDComponent.valid = ret.valid;
            }
          }
        }
      };
      if (props.onChange) {
        const oldOnChange = props.onChange;
        props.onChange = event => {
          // noinspection JSIgnoredPromiseFromCall
          validationFunction(event);
          oldOnChange(event);
        };
      } else {
        props.onChange = validationFunction;
      }
      if (validateOnKeys) {
        if (props.onKeyUp) {
          const olOnKeyUp = props.onKeyUp;
          props.onKeyUp = event => {
            // noinspection JSIgnoredPromiseFromCall
            validationFunction(event);
            olOnKeyUp(event);
          };
        } else {
          props.onKeyUp = props.onChange;
        }
      }
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

type input_type =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface ITextFieldProps extends JSX.HTMLAttributes {
  fullwidth?: boolean;
  textarea?: boolean;
  type?: input_type;
  dense?: boolean;
  box?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  valid?: boolean; // TODO: Add to docs
  helperText?: string;
  helperTextPersistent?: boolean;
  helperTextValidationMsg?: boolean;
  cssLabel?: string;
  leadingIcon?: string; // TODO: Add to docs
  trailingIcon?: string; // TODO: Add to docs
  outerStyle?: {[key: string]: string};
}

export interface ITextFieldState {
  showFloatingLabel: boolean;
}

export class TextField extends Component<ITextFieldProps, ITextFieldState> {
  public static readonly defaultProps = {
    outerStyle: {}
  };

  public static readonly HelperText = HelperText;
  protected static uidCounter = 0;

  protected static uid() {
    return ++this.uidCounter;
  }

  public state = {
    showFloatingLabel: false
  };

  protected readonly id = TextField.uid();
  protected MDComponent?: MDCTextField;

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
