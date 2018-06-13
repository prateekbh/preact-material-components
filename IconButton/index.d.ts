import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IButtonProps {}
export default class IconButton<
  PropsType = JSX.HTMLAttributes,
  StateType = {}
> extends MaterialComponent<PropsType & IButtonProps, StateType> {
  static Icon: typeof Icon;
}
