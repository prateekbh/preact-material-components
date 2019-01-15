import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

interface ICardActionsProps {
  'full-bleed'?: boolean;
}

interface ICardActionsState {}

export class CardActions extends MaterialComponent<
  ICardActionsProps,
  ICardActionsState
> {
  protected componentName = 'card__actions';
  protected mdcProps = ['full-bleed'];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
