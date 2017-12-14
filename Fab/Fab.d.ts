import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IFabProps {
  'mini'?: boolean;
  'exited'?: boolean;
}

export default class Fab extends MaterialComponent<IFabProps & JSX.HTMLAttributes, {}> {
  static Icon: typeof Icon;
}
export class Icon extends MaterialComponent<JSX.HTMLAttributes, {}> {}