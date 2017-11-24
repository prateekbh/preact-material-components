import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IIconToggleProps extends JSX.HTMLAttributes {
  disabled?: boolean;
  'data-toggle-on'?: any;
  'data-toggle-off'?: any;
}
export default class IconToggle extends MaterialComponent<IIconToggleProps, {}> {}