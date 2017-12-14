import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IFormfieldProps {
  'align-end'?: boolean;
}

export default class Formfield extends MaterialComponent<IFormfieldProps & JSX.HTMLAttributes, {}> {}