import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface ISwitchProps {
  disabled?: boolean;
}
export default class Switch extends MaterialComponent<ISwitchProps & JSX.HTMLAttributes, {}> {}