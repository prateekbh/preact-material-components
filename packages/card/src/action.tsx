import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {Button} from '@preact-material-components/button';
import {Icon} from '@preact-material-components/icon';
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

export interface ICardActionIconsProps {}

export interface ICardActionIconsState {}

export class CardActionIcons extends MaterialComponent<
  ICardActionIconsProps,
  ICardActionIconsState
> {
  protected componentName = 'card__action-icons';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export class CardActionIcon extends Icon {
  protected componentName = 'card__action';
  protected mdcProps = [];

  protected materialDom(props) {
    if (props.className) {
      props.className += ' mdc-card__action--icon';
    } else {
      props.className = 'mdc-card__action--icon';
    }
    return super.materialDom(props);
  }
}
