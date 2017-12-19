import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent, MDCRipple } from '../MaterialComponentsWeb';

declare interface IconToggleState {
  label?: string;
  content?: string;
  cssClass?: string;
}

declare interface IIconToggleProps extends JSX.HTMLAttributes {
  'data-toggle-on'?: IconToggleState;
  'data-toggle-off'?: IconToggleState;
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