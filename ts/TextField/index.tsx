import {MDCTextField} from '@material/textfield';
import {Component, h} from 'preact';
import MaterialComponent, {
  MaterialComponentProps
} from '../Base/MaterialComponent';
import {SoftMerge} from '../Base/types';
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
  onInit?: (c: MDCTextField) => any | void;
  valid?: boolean;
  value?: string;
}

export interface ITextFieldInputState {
  jsComponentAttached: boolean;
}

export class TextFieldInput extends MaterialComponent<
  ITextFieldInputProps,
  ITextFieldInputState
> {
  public static readonly defaultProps = {
    valid: true
  };

  public state = {
    jsComponentAttached: false
  };
  public MDComponent?: MDCTextField;

  protected componentName = 'text-field';
  protected mdcProps = [
    'fullwidth',
    'textarea',
    'dense',
    'disabled',
    'box',
    'outlined'
  ];

  protected mdcNotifyProps = ['valid', 'disabled'];

  public componentDidMount() {
    super.componentDidMount();
    this.setState(
      {
        jsComponentAttached: true
      },
      () => {
        if (this.control) {
          this.MDComponent = new MDCTextField(this.control);
          if (this.props.onInit) {
            this.props.onInit(this.MDComponent);
          }
          if (this.props.value) {
            this.MDComponent.value = this.props.value;
          }
        }
        this.afterComponentDidMount();
      }
    );
  }

  public componentWillReceiveProps(nextProps: ITextFieldInputProps) {
    super.componentWillReceiveProps(nextProps);
    if (
      this.MDComponent &&
      nextProps.value &&
      this.props.value !== nextProps.value &&
      this.MDComponent.value !== nextProps.value
    ) {
      this.MDComponent.value = nextProps.value;
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
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

    if ('value' in props && this.state.jsComponentAttached) {
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
            placeholder={
              this.state.jsComponentAttached
                ? undefined
                : props.label + this.props.required
                  ? '*'
                  : ''
            }
            {...props}
          />
        )}
        {props.label &&
          this.state.jsComponentAttached && (
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

  protected buildClassName(
    props: MaterialComponentProps<ITextFieldInputProps>
  ) {
    let cn: string = super.buildClassName(props);
    if (this.MDComponent) {
      cn += ' mdc-text-field--upgraded';
    }
    return cn;
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

interface ITextFieldOwnProps {
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
  value?: string;
}

export interface ITextFieldProps
  extends SoftMerge<ITextFieldOwnProps, JSX.HTMLAttributes> {}

export interface ITextFieldState {}

export class TextField extends Component<ITextFieldProps, ITextFieldState> {
  protected static uidCounter = 0;

  protected static uid() {
    return ++this.uidCounter;
  }

  public MDComponent?: MDCTextField;

  protected readonly id = TextField.uid();

  public componentDidMount() {
    this.setState({
      jsComponentAttached: true
    });
  }

  public render(allprops) {
    const {
      className,
      outerStyle,
      helperTextPersistent,
      helperTextValidationMsg,
      ...props
    } = allprops;
    const showDiv = props.helperText;

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

export default class extends TextField {
  public static readonly HelperText = HelperText;
}
