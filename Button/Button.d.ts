import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IButtonProps {
  dense?: boolean;
  raised?: boolean;
  compact?: boolean;
  disabled?: boolean;
  unelevated?: boolean;
  stroked?: boolean;
}
export default class Button<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & IButtonProps & JSX.HTMLAttributes, StateType> {
  static Icon: typeof Icon;
}
declare class Icon extends MaterialComponent<JSX.HTMLAttributes, {}> {}