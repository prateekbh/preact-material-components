import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IButtonProps {
  dense?: boolean;
  raised?: boolean;
  disabled?: boolean;
  unelevated?: boolean;
  stroked?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
export default class Button<
  PropsType = JSX.HTMLAttributes,
  StateType = {}
> extends MaterialComponent<PropsType & IButtonProps, StateType> {
  static Icon: typeof Icon;
}
declare class Icon extends MaterialComponent<JSX.HTMLAttributes, {}> {}
