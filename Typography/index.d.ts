import MaterialComponent from '../ts/MaterialComponent';
import {VNode} from 'preact';

declare interface ITypographyProps {
  body1?: boolean;
  body2?: boolean;
  button?: boolean;
  caption?: boolean;
  headline1?: boolean;
  headline2?: boolean;
  headline3?: boolean;
  headline4?: boolean;
  headline5?: boolean;
  headline6?: boolean;
  overline?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
}
export default class Typography extends MaterialComponent<
  ITypographyProps,
  {}
> {}
