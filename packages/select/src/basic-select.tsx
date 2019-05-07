import {MDCSelect} from '@material/select';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './basic-option';

export interface ISelectEventDetails {
  MDComponent: MDCSelect;
  value: string;
  index: number;
}
export interface IBasicSelectProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  selectedIndex?: number;
  onSelect?: (e: Event, detail: ISelectEventDetails) => void;
}

export interface IBasicSelectState {
  selectedValue: string;
}

export class BasicSelect extends MaterialComponent<
  IBasicSelectProps,
  IBasicSelectState
> {
  public MDComponent?: MDCSelect;
  public state = {
    selectedValue: ''
  };

  protected componentName = 'select';
  protected mdcProps = ['disabled', 'outlined'];
  protected labelRef?: Element;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSelect(this.control);
      this.MDComponent.listen('MDCSelect:change', this.onChange);
    }
    this.updateSelection();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCSelect:change', this.onChange);
      this.MDComponent.destroy();
    }
  }

  public componentDidUpdate() {
    this.updateSelection();
  }

  protected onChange = e => {
    const {value, index} = e.detail;
    this.proxyEventHandler('onSelect', e, {index, value});
  };

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

  protected getDecorator({outlined, label}) {
    if (outlined) {
      return (
        <div class="mdc-notched-outline">
          <div class="mdc-notched-outline__leading" />
          <div class="mdc-notched-outline__notch">
            {label && <label class="mdc-floating-label">{label}</label>}
          </div>
          <div class="mdc-notched-outline__trailing" />
        </div>
      );
    } else {
      return <div class="mdc-line-ripple" />;
    }
  }

  protected materialDom(allprops) {
    const {label, outlined, ...props} = allprops;
    // noinspection RequiredAttributes
    return (
      <div ref={this.setControlRef} {...props}>
        <i class="mdc-select__dropdown-icon" />
        <select class="mdc-select__native-control">
          {label && <option value="" disabled selected />}
          {props.children}
        </select>
        {this.getDecorator({outlined, label})}
        {!outlined && label && (
          <label class="mdc-floating-label">{label}</label>
        )}
      </div>
    );
  }
}
