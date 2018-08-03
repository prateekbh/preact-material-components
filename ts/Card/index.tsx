import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Button from '../Button';
import Icon from '../Icon';

interface IActionsProps {
  'full-bleed'?: boolean;
}

interface ICardActionsProps extends IActionsProps {}

interface ICardActionsState {}

export class CardActions extends MaterialComponent<
  ICardActionsProps,
  ICardActionsState
> {
  protected componentName = 'card__actions';
  protected mdcProps = ['full-bleed'];

  @autobind
  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface ICardMediaProps extends JSX.HTMLAttributes {
  x?: 'square' | 'sixteenByNine';
}

export interface ICardMediaState {}

export class CardMedia extends MaterialComponent<
  ICardMediaProps,
  ICardMediaState
> {
  protected componentName = 'card__media';
  protected mdcProps = ['square', '16-9'];

  @autobind
  protected materialDom(props) {
    if (props.sixteenByNine) {
      props.className = 'mdc-card__media--16-9';
    }
    return <div {...props}>{this.props.children}</div>;
  }
}

export class CardActionButton extends Button {
  protected componentName = 'card__action';
  protected mdcProps = [];

  @autobind
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

  @autobind
  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export class CardActionIcon extends Icon {
  protected componentName = 'card__action';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    if (props.className) {
      props.className += ' mdc-card__action--icon';
    } else {
      props.className = 'mdc-card__action--icon';
    }
    return super.materialDom(props);
  }
}

export interface ICardMediaContentProps extends IActionsProps {}

export interface ICardMediaContentState {}

export class CardMediaContent extends MaterialComponent<
  ICardMediaContentProps,
  ICardMediaContentState
> {
  protected componentName = 'card__media-content';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface ICardProps {
  outlined?: boolean;
}

export interface ICardState {}

export class Card extends MaterialComponent<ICardProps, ICardState> {
  public static readonly Actions = CardActions;
  public static readonly ActionButton = CardActionButton;
  public static readonly ActionIcons = CardActionIcons;
  public static readonly ActionIcon = CardActionIcon;
  public static readonly Media = CardMedia;
  public static readonly CardMediaContent = CardMediaContent;

  protected componentName = 'card';
  protected mdcProps = ['outlined'];

  @autobind
  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export default Card;
