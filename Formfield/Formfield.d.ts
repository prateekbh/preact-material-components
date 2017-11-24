import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IFormfieldProps extends JSX.HTMLAttributes {
  'align-end'?: boolean;
}

export default class Formfield extends MaterialComponent<IFormfieldProps, {}> {}