import {AnyComponent, h} from 'preact';
import {
  MaterialComponent,
  MaterialComponentProps
} from '@preact-material-components/base/lib/MaterialComponent';

export interface ITypographyProps {
  body?: 1 | 2 | '1' | '2';
  button?: boolean;
  caption?: boolean;
  headline?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
  overline?: boolean;
  subtitle?: 1 | 2 | '1' | '2';
  title?: boolean; // TODO: Add to docs / remove from here
  tag?: AnyComponent | string;
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

  protected materialDom(allprops: MaterialComponentProps<ITypographyProps>) {
    const {tag, body, headline, subtitle, ...props} = allprops;
    const Tag = tag ? tag : 'span';

    const numberedAttrs = {body, headline, subtitle};
    for (const attr in numberedAttrs) {
      if (numberedAttrs.hasOwnProperty(attr) && numberedAttrs[attr]) {
        props.class = `mdc-${this.componentName}--${attr}${
          numberedAttrs[attr]
        }`;
        break;
      }
    }

    return (
      <Tag {...props} ref={this.setControlRef}>
        {props.children}
      </Tag>
    );
  }
}
