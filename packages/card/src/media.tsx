import {MaterialComponent} from '@preact-material-components/base';
import {h} from 'preact';

export interface ICardMediaProps extends JSX.HTMLAttributes {
  square?: boolean;
  sixteenByNine?: boolean;
}

export interface ICardMediaState {}

export class CardMedia extends MaterialComponent<
  ICardMediaProps,
  ICardMediaState
> {
  protected componentName = 'card__media';
  protected mdcProps = ['square', '16-9'];

  protected materialDom(props) {
    if (props.sixteenByNine) {
      props.className = 'mdc-card__media--16-9';
    }
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface ICardMediaContentProps {}

export interface ICardMediaContentState {}

export class CardMediaContent extends MaterialComponent<
  ICardMediaContentProps,
  ICardMediaContentState
> {
  protected componentName = 'card__media-content';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
