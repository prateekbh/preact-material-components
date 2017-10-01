import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IHelptextProps extends JSX.HTMLAttributes {
  persistent?: boolean,
  'validation-msg'?: boolean
}
export class Helptext extends MaterialComponent<IHelptextProps, {}> {
  materialDom(props: IHelptextProps): VNode;
}

export interface ITextfieldProps extends JSX.HTMLAttributes {
  helptext?: string,
  helptextPersistent?: string,
  helptextValidationMsg?: string,
  cssLabel?: string
}
export interface ITextfieldState {
  showFloatingLabel: boolean
}
export default class Textfield extends MaterialComponent<ITextfieldProps, ITextfieldState> {
  static uid(): number;
  componentDidMount(): void;
  render(): JSX.Element;
}