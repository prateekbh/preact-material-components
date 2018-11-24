import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './actions';
export * from './media';

export interface ICardProps {
  outlined?: boolean;
}

export interface ICardState {}

export class Card extends MaterialComponent<ICardProps, ICardState> {
  protected componentName = 'card';
  protected mdcProps = ['outlined'];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
