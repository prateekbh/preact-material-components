import {MDCSelect} from '@material/select/';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ISelectOptionProps {
  disabled?: boolean;
  selected?: boolean;
}

export interface ISelectOptionState {}

export class SelectOption extends MaterialComponent<
  ISelectOptionProps,
  ISelectOptionState
> {
  protected componentName = 'select-item';
  protected mdcProps = [];

  protected materialDom(props) {
    return <option {...props}>{props.children}</option>;
  }
}

export interface ISelectProps {
  disabled?: boolean;
  box?: boolean;
  outlined?: boolean;
  hintText?: string;
  selectedIndex?: number;

  onChange?: (e: Event & {selectedIndex: number}) => void;
}

export interface ISelectState {}

export class Select extends MaterialComponent<ISelectProps, ISelectState> {
  public static readonly Item = SelectOption;

  protected componentName = 'select';
  protected mdcProps = ['disabled', 'box', 'outlined'];
  protected MDComponent?: MDCSelect;
  protected labelRef?: Element;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSelect(this.control);
      this.MDComponent.listen('MDCSelect:change', this.changed);
    }
    this.updateSelection();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCSelect:change', this.changed);
      this.MDComponent.destroy();
    }
  }

  public componentDidUpdate() {
    this.updateSelection();
  }

  @bind
  protected changed(e) {
    if (this.MDComponent) {
      e = e || {};
      e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }

  protected updateSelection() {
    if (this.MDComponent) {
      if (this.props.selectedIndex) {
        this.MDComponent.selectedIndex =
          typeof this.props.selectedIndex === 'number'
            ? this.props.selectedIndex
            : 0;
      }

      const selectedIndex = this.MDComponent.selectedIndex;
      if (selectedIndex === 0) {
        if (this.labelRef) {
          this.labelRef.classList.remove('mdc-floating-label--float-above');
        }
      } else {
        if (this.labelRef) {
          this.labelRef.classList.add('mdc-floating-label--float-above');
        }
      }
    }
  }

  protected materialDom(allprops) {
    const {outlined, ...props} = allprops;
    // noinspection RequiredAttributes
    return (
      <div ref={this.setControlRef} {...props}>
        <select class="mdc-select__native-control">
          {props.hintText && <option value="" disabled selected />}
          {props.children}
        </select>
        {props.hintText && (
          <div
            class="mdc-floating-label"
            ref={ref => {
              this.labelRef = ref;
            }}>
            {props.hintText}
          </div>
        )}
        {!outlined && <div class="mdc-line-ripple" />}
        {outlined && (
          <div class="mdc-notched-outline">
            <svg>
              <path class="mdc-notched-outline__path" />
            </svg>
          </div>
        )}
        {outlined && <div class="mdc-notched-outline__idle" />}
      </div>
    );
  }
}

export default Select;
