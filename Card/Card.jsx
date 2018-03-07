import Button from '../Button';
import Icon from '../Icon';
import MaterialComponent from '../MaterialComponent';
import {h} from 'preact';

class Card extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'card';
    this._mdcProps = ['stroked'];
  }
}

class CardActions extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'card__actions';
    this._mdcProps = ['full-bleed'];
  }
}

class CardMedia extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'card__media';
    this._mdcProps = ['square', '16-9'];
  }
}

class CardActionButton extends Button {
  constructor() {
    super();
    this.componentName = 'card__action';
  }
  materialDom(props) {
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

class CardActionIcons extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'card__action-icons';
  }
}

class CardActionIcon extends Icon {
  constructor() {
    super();
    this.componentName = 'card__action';
  }
  materialDom(props) {
    props.className = 'mdc-card__action--icon';
    return super.materialDom(props);
  }
}

class CardMediaContent extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'card__media-content';
  }
}

Card.Actions = CardActions;
Card.ActionButton = CardActionButton;
Card.ActionIcons = CardActionIcons;
Card.ActionIcon = CardActionIcon;
Card.Media = CardMedia;
Card.CardMediaContent = CardMediaContent;

export default Card;
