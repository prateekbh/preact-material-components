import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IHelptextProps {
  persistent?: boolean,
  'validation-msg'?: boolean
}
export class Helptext extends MaterialComponent<IHelptextProps, {}> {
  materialDom(props: IHelptextProps): VNode;
}

export interface ILabelProps {}
export class Label extends MaterialComponent<ILabelProps, {}> {
  materialDom(props: ILabelProps): VNode;
}

export interface ITextfieldInputProps {
  fullwidth?: boolean,
  multiline?: boolean,
  dense?: boolean,
  disabled?: boolean,
  box?: boolean,
  type?: string,
  value?: string,
  label?: string,
  id?: string,
  className?: string
}
export interface ITextfieldInputState {
  showFloatingLabel: boolean
}
export class TextfieldInput extends MaterialComponent<ITextfieldInputProps, ITextfieldInputState> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: ITextfieldInputProps): VNode;
}

export interface ITextfieldProps extends ITextfieldInputProps {
  helptext?: string,
  helptextPersistent?: string,
  helptextValidationMsg?: string,
  cssLabel?: string
}
export interface ITextfieldState {
  showFloatingLabel: boolean
}
export class Textfield extends MaterialComponent<ITextfieldProps, ITextfieldState> {
  componentDidMount(): void;
  static uid(): number;
  render(props: ITextfieldProps, state: ITextfieldState): JSX.Element;
}