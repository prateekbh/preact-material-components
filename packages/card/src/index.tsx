import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';
export interface ICardProps {
  outlined?: boolean;
}

export interface ICardState {}

export class Card extends MaterialComponent<ICardProps, ICardState> {
  protected componentName = 'card';
  protected mdcProps = ['outlined'];

  protected materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}

export * from './actions';
export * from './media';
export * from './primary-action';
