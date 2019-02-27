import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './button';
export * from './icons';

export interface IActionsProps {
  'full-bleed'?: boolean;
}

export interface IActionsState {}

export class Actions extends MaterialComponent<IActionsProps, IActionsState> {
  protected componentName = 'card__actions';
  protected mdcProps = ['full-bleed'];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
