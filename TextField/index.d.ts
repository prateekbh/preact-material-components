import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent, MDCRipple} from '../MaterialComponentsWeb';

declare interface IHelperTextProps extends JSX.HTMLAttributes {
  persistent?: boolean;
  'validation-msg'?: boolean;
}
declare class HelperText extends MaterialComponent<IHelperTextProps, {}> {}

declare interface ITextFieldProps extends JSX.HTMLAttributes {
  fullwidth?: boolean;
  textarea?: boolean;
  dense?: boolean;
  box?: boolean;
  helperText?: string;
  helperTextPersistent?: boolean;
  helperTextValidationMsg?: boolean;
  cssLabel?: string;
  leadingIcon?: string;
  trailingIcon?: string;
}
declare interface ITextFieldState {
  showFloatingLabel: boolean;
}
export default class TextField extends MaterialComponent<
  ITextFieldProps,
  ITextFieldState
> {
  static HelperText: typeof HelperText;

  static uid(): number;
  getValue(): string;
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
  helperTextElement: Element | null | undefined;
  ripple: MDCRipple;
  disabled: boolean;
  valid: boolean;
  helperTextContent: string;
}
