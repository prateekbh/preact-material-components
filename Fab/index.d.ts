import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IFabProps extends JSX.HTMLAttributes {
  mini?: boolean;
  exited?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export default class Fab extends MaterialComponent<IFabProps, {}> {
  static Icon: typeof Icon;
}
export class Icon extends MaterialComponent<JSX.HTMLAttributes, {}> {}
