import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ISelectProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}

export default class Select extends MaterialComponent<ISelectProps, {}> {
  updateSelection(): void;
}