import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface ISwitchProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}
export default class Switch extends MaterialComponent<ISwitchProps, {}> {}