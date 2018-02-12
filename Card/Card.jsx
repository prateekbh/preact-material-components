import Button from "../Button";
import Icon from "../Icon";
import MaterialComponent from "../MaterialComponent";
import { h } from "preact";

class Card extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card";
    this._mdcProps = ["stroked"];
  }
}

class CardActions extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card__actions";
    this._mdcProps = ["full-bleed"];
  }
}

class CardMedia extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card__media";
    this._mdcProps = ["square", "16-9"];
  }
}

class CardActionButton extends Button {
  constructor() {
    super();
    this.componentName = "card__action";
  }
  materialDom(props) {
    return (
      <button
        className="mdc-button mdc-card__action--button"
        {...props}
        ref={control => {
          this.control = control;
        }}
      >
        {props.children}
      </button>
    );
  }
}

class CardActionIcon extends Icon {
  constructor() {
    super();
    this.componentName = "card__action";
  }
  materialDom(props) {
    props.className = props.className
      ? props.className + " mdc-card__action--icon"
      : props.className;
    return super.materialDom(props);
  }
}

class CardMediaContent extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card__media-content";
  }
}

Card.SupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.ActionButton = CardActionButton;
Card.ActionIcon = CardActionIcon;
Card.Media = CardMedia;
Card.CardMediaContent = CardCardMediaContent;

export default Card;
