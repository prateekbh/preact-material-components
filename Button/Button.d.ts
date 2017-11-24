import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IButtonProps extends JSX.HTMLAttributes {
  dense?: boolean;
  raised?: boolean;
  compact?: boolean;
  unelevated?: boolean;
  stroked?: boolean;
}
export default class Button<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & IButtonProps, StateType> {}
export class Icon extends MaterialComponent<JSX.HTMLAttributes, {}> {}