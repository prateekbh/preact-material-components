import {MDCCheckbox} from '@material/checkbox';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';
import {bind} from 'bind-decorator';

export interface ICheckboxProps {
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (
    event: Event,
    argument: {
      checked: boolean;
      indeterminate: boolean;
      MDComponent: Checkbox;
    }
  ) => void;
  checked?: boolean;
}

export interface ICheckboxState {}

export class Checkbox extends MaterialComponent<
  ICheckboxProps,
  ICheckboxState
> {
  public MDComponent?: MDCCheckbox;
  protected componentName = 'checkbox';
  protected mdcProps = ['disabled'];
  protected mdcNotifyProps = ['checked', 'indeterminate', 'disabled'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCCheckbox(this.control);
      this.control.addEventListener('change', this.onChange);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.control) {
      this.control.removeEventListener('change', this.onChange);
    }
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  @bind
  public onChange(event: Event) {
    const {MDComponent} = this;
    const {checked, indeterminate} = MDComponent;
    if (this.props.onChange) {
      this.props.onChange(event, {
        MDComponent,
        checked,
        indeterminate
      });
    }
  }

  protected materialDom(props) {
    const {onChange, ...allprops} = props;

    return (
      <div ref={this.setControlRef}>
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          {...allprops}
        />
        <div className="mdc-checkbox__background">
          <svg
            version="1.1"
            className="mdc-checkbox__checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    );
  }
}
