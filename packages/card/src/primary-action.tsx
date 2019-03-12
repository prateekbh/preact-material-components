import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ICardPrimaryActionProps extends JSX.HTMLAttributes {}

export interface ICardPrimaryActionState {}

export class CardPrimaryAction extends MaterialComponent<
  ICardPrimaryActionProps,
  ICardPrimaryActionState
> {
  protected componentName = 'card__primary-action';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div {...props} tabIndex="0">
        {props.children}
      </div>
    );
  }
}
