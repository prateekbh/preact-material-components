import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent, MDCRipple } from '../MaterialComponentsWeb';

declare interface ICheckboxProps {
  disabled?: boolean;
}
export default class Checkbox extends MaterialComponent<ICheckboxProps & JSX.HTMLAttributes, {}> {
  MDComponent: MDCCheckbox;
}

declare class MDCCheckboxFoundation extends MDCFoundation<MDCCheckbox> {
  isChecked(): boolean;
  setChecked(checked: boolean): void;
  isIndeterminate(): boolean;
  setIndeterminate(indeterminate: boolean);
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  getValue(): string|undefined|null;
  setValue(value?: string): void;
}

declare class MDCCheckbox extends MDCComponent<MDCCheckboxFoundation> {
  ripple: MDCRipple;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  value: string;
}