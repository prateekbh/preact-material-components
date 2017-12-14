import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent, MDCRipple } from '../MaterialComponentsWeb';

declare interface IHelptextProps {
  persistent?: boolean;
  'validation-msg'?: boolean;
}
declare class Helptext extends MaterialComponent<IHelptextProps & JSX.HTMLAttributes, {}> {}

declare interface ITextFieldProps {
  helptext?: string;
  helptextPersistent?: string;
  helptextValidationMsg?: string;
  cssLabel?: string;
}
interface ITextFieldState {
  showFloatingLabel: boolean;
}
export default class TextField extends MaterialComponent<ITextFieldProps & JSX.HTMLAttributes, ITextFieldState> {
  static Helptext: typeof Helptext;

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