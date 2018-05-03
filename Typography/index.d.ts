import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface ITypographyProps {
  dense?: boolean;
  raised?: boolean;
  disabled?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
export default class Typography extends MaterialComponent<
  ITypographyProps,
  {}
> {}
