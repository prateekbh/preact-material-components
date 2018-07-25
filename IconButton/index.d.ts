import MaterialComponent from '../ts/MaterialComponent';
import {VNode} from 'preact';

declare interface IIconButtonProps {
  'data-toggle-on'?: string;
  'data-toggle-off'?: string;
}
export default class IconButton<
  PropsType = JSX.HTMLAttributes,
  StateType = {}
> extends MaterialComponent<PropsType & IIconButtonProps, StateType> {
  static Icon: typeof Icon;
}
