import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent, MDCRipple} from '../MaterialComponentsWeb';

export default class Radio extends MaterialComponent<JSX.HTMLAttributes, {}> {
  MDComponent: MDCRadio;
}

declare class MDCRadioFoundation extends MDCFoundation<MDCRadio> {
  isChecked(): boolean;
  setChecked(checked: boolean): void;
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  getValue(): string | null | undefined;
  setValue(value: string | null | undefined): void;
}
declare class MDCRadio extends MDCComponent<MDCRadioFoundation> {
  checked: boolean;
  disabled: boolean;
  value: string | null | undefined;
  ripple: MDCRipple;
}
