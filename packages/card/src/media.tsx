import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IMediaProps extends JSX.HTMLAttributes {
  square?: boolean;
  sixteenByNine?: boolean;
}

export interface IMediaState {}

export class Media extends MaterialComponent<IMediaProps, IMediaState> {
  protected componentName = 'card__media';
  protected mdcProps = ['square'];

  protected materialDom(props) {
    if (props.sixteenByNine) {
      props.className = 'mdc-card__media--16-9';
    }
    return <div {...props}>{props.children}</div>;
  }
}

export interface IMediaContentProps {}

export interface IMediaContentState {}

export class MediaContent extends MaterialComponent<
  IMediaContentProps,
  IMediaContentState
> {
  protected componentName = 'card__media-content';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}
