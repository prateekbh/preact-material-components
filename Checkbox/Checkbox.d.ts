import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ICheckboxProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}
export default class Checkbox extends MaterialComponent<ICheckboxProps, {}> {}