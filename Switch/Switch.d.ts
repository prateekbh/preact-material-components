import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ISwitchProps extends JSX.HTMLAttributes {
  disabled?: boolean
}
export default class Switch extends MaterialComponent<ISwitchProps, {}> {
  materialDom(props: ISwitchProps): VNode;
}