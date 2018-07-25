import {MDCSelect} from '@material/select/';
import {h} from 'preact';
import {MDCComponent, MDCFoundation} from '../../MaterialComponentsWeb';
import {IListItemProps, IListItemState, ListItem} from '../List/index';
import MaterialComponent from '../MaterialComponent';
import {Omit} from '../types';

declare class MDCSelectFoundation extends MDCFoundation<MDCSelect> {
  public getValue(): string;
  public getSelectedIndex(): number;
  public setSelectedIndex(index: number): void;
  public isDisabled(): boolean;
  public setDisabled(disabled: boolean): void;
  public resize(): void;
}
declare class MDCSelect extends MDCComponent<MDCSelectFoundation> {
  public value: string;
  public options: Element[];
  public selectedOptions: NodeListOf<Element>;
  public selectedIndex: number;
  public disabled: boolean;
  public item(index: number): Element | null;
  public nameditem(key: string): Element | null;
}

export class SelectOption extends ListItem {
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
  onChange?: (
    e: {selectedIndex: number; selectedOptions: NodeListOf<Element>}
  ) => void;
}

export interface ISelectState {}

export class Select extends MaterialComponent<ISelectProps, ISelectState> {
  protected componentName = 'select';
  protected mdcProps = ['disabled', 'box', 'outlined'];
  protected MDComponent: MDCSelect;
  protected labelRef: HTMLDivElement;

  public componentDidMount() {
    this.MDComponent = new MDCSelect(this.base);
    this.MDComponent.listen('MDCSelect:change', this.changed);
    this.updateSelection();
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCSelect:change', this.changed);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  public componentDidUpdate() {
    this.updateSelection();
  }

  protected changed(e) {
    e = e || {};
    e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
    e.selectedOptions = e.selectedOptions || this.MDComponent.selectedOptions;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  protected updateSelection() {
    if ('selectedIndex' in this.props) {
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
