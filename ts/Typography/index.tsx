import {Component, h, VNode} from 'preact';
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
  title?: boolean; // TODO: Add to docs / remove from here
  tag?:
    | Component<{}, {}>
    | ((props: {}) => VNode)
    | keyof JSX.IntrinsicElements;
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
    'overline',
    'title'
  ];

  protected materialDom(allprops) {
    const {tag, ...props} = allprops;
    const Tag = tag ? tag : 'span';
    return (
      <Tag {...props} ref={this.setControlRef}>
        {props.children}
      </Tag>
    );
  }
}

export default Typography;
