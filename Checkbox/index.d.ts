import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent, MDCRipple} from '../MaterialComponentsWeb';

declare interface ICheckboxProps extends JSX.HTMLAttributes {
  indeterminate?: boolean;
}
export default class Checkbox extends MaterialComponent<ICheckboxProps, {}> {
  MDComponent: MDCCheckbox;
}

declare class MDCCheckboxFoundation extends MDCFoundation<MDCCheckbox> {
  isChecked(): boolean;
  setChecked(checked: boolean): void;
  isIndeterminate(): boolean;
  setIndeterminate(indeterminate: boolean): void;
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  getValue(): string | undefined | null;
  setValue(value?: string): void;
}

declare class MDCCheckbox extends MDCComponent<MDCCheckboxFoundation> {
  ripple: MDCRipple;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  value: string;
}
