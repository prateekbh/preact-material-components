import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IIconProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}
export default class Icon extends MaterialComponent<IIconProps, {}> {}