import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent, MDCRipple} from '../MaterialComponentsWeb';

type IconToggleData = {
  label?: string;
  content?: string;
  cssClass?: string;
};

declare interface IIconToggleProps extends JSX.HTMLAttributes {
  'data-toggle-on'?: IconToggleData;
  'data-toggle-off'?: IconToggleData;
}
export default class IconToggle extends MaterialComponent<
  IIconToggleProps,
  {}
> {
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
