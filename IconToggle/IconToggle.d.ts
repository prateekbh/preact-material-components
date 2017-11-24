import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent, MDCRipple } from '../MaterialComponentsWeb';

export interface IIconToggleProps extends JSX.HTMLAttributes {
  disabled?: boolean;
  'data-toggle-on'?: any;
  'data-toggle-off'?: any;
}
export default class IconToggle extends MaterialComponent<IIconToggleProps, {}> {
  MDComponent: MDCIconToggle;
}

declare class MDCIconToggleFoundation extends MDCFoundation<MDCIconToggle> {
  refreshToggleData(): void;
  isOn(): boolean;
  toggle(isOn?: boolean): void;
  isDisabled(): boolean;
  setDisabled(isDisabled: boolean): void;
  isKeyboardActivated(): boolean;
}
declare class MDCIconToggle extends MDCComponent<MDCIconToggleFoundation> {
  ripple: MDCRipple;
  on: boolean;
  disabled: boolean;
  refreshToggleData(): void;
}