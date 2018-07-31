import {MDCSelect} from '@material/select/';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {Omit} from '../Base/types';
import {ListItem} from '../List';

export class SelectOption extends ListItem {
  @autobind
  protected materialDom() {
    return <option {...this.props}>{this.props.children}</option>;
  }
}

export interface ISelectProps
  extends Omit<JSX.HTMLAttributes, 'onChange' | 'disabled'> {
  disabled?: boolean;
  box?: boolean;
  outlined?: boolean;
  hintText?: string;
  selectedIndex?: number;
  onChange?: (e: {selectedIndex: number}) => void;
}

export interface ISelectState {}

export class Select extends MaterialComponent<ISelectProps, ISelectState> {
  protected componentName = 'select';
  protected mdcProps = ['disabled', 'box', 'outlined'];
  protected MDComponent?: MDCSelect;
  protected labelRef?: Element;

  public componentDidMount() {
    this.MDComponent = new MDCSelect(this.base);
    this.MDComponent.listen('MDCSelect:change', this.changed);
    this.updateSelection();
  }

  public componentWillUnmount() {
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCSelect:change', this.changed);
      this.MDComponent.destroy();
    }
  }

  public componentDidUpdate() {
    this.updateSelection();
  }

  @autobind
  protected changed(e) {
    if (this.MDComponent) {
      e = e || {};
      e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }

  @autobind
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

  @autobind
  protected materialDom(allprops) {
    const {outlined, ...props} = allprops;
    // noinspection RequiredAttributes
    return (
      <div {...props}>
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
