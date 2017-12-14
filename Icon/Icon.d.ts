import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

declare interface IIconProps {
  disabled?: boolean;
}
export default class Icon extends MaterialComponent<IIconProps & JSX.HTMLAttributes, {}> {}