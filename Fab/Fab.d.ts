import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IFabProps extends JSX.HTMLAttributes {
  'mini'?: boolean;
  'exited'?: boolean;
}

export default class Fab extends MaterialComponent<IFabProps, {}> {}
export class Icon extends MaterialComponent<JSX.HTMLAttributes, {}> {}