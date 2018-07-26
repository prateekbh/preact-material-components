import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ITypographyProps {
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

export interface ITypographyState {}

export class Typography extends MaterialComponent<
  ITypographyProps,
  ITypographyState
> {
  protected componentName = 'typography';
  protected mdcProps = [
    'headline1',
    'headline2',
    'headline3',
    'headline4',
    'headline5',
    'headline6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline'
  ];

  @autobind
  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

export default Typography;
