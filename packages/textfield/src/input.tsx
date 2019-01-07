import {MDCTextField} from '@material/textfield';
import {
  MaterialComponent,
  MaterialComponentProps
} from '@preact-material/base/lib/MaterialComponent';
import {Icon} from '@preact-material/icon';
import {h} from 'preact';
import {Label} from './label';

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

  public componentWillUpdate(nextProps: ITextFieldInputProps) {
    if (nextProps.value && this.props.value !== nextProps.value) {
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
                : props.label + (this.props.required ? '*' : '')
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
