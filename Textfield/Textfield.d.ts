import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent, MDCRipple } from '../MaterialComponentsWeb';

export interface IHelptextProps extends JSX.HTMLAttributes {
  persistent?: boolean;
  'validation-msg'?: boolean;
}
export class Helptext extends MaterialComponent<IHelptextProps, {}> {}

export interface ITextfieldProps extends JSX.HTMLAttributes {
  helptext?: string;
  helptextPersistent?: string;
  helptextValidationMsg?: string;
  cssLabel?: string;
}
export interface ITextfieldState {
  showFloatingLabel: boolean;
}
export default class Textfield extends MaterialComponent<ITextfieldProps, ITextfieldState> {
  static uid(): number;
  MDComponent: MDCTextField;
}

declare class MDCTextFieldFoundation extends MDCFoundation<MDCTextField> {
  handleTextFieldInteraction(evt: Event): void;
  activateFocus(): void;
  setBottomLineTransformOrigin(evt: Event): void;
  autoCompleteFocus(): void;
  handleBottomLineAnimationEnd(): void;
  deactivateFocus(): void;
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  setHelperTextContent(content: string): void;
  setValid(isValid: boolean): void;
}
declare class MDCTextField extends MDCComponent<MDCTextFieldFoundation> {
  helperTextElement: Element|null|undefined;
  ripple: MDCRipple;
  disabled: boolean;
  valid: boolean;
  helperTextContent: string;
}