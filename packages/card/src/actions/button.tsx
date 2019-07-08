import {
  Button,
  IButtonProps,
  IButtonState
} from '@preact-material-components/button';
import {h} from 'preact';

export interface ICardActionButtonProps extends IButtonProps {}

export interface ICardActionButtonState extends IButtonState {}

export class CardActionButton extends Button {
  protected componentName = 'card__action';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <button
        className="mdc-button mdc-card__action--button"
        {...props}
        ref={this.setControlRef}>
        {props.children}
      </button>
    );
  }
}
