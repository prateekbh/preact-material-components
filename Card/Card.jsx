import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Button from "../Button";
class Card extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card";
    this._mdcProps = ["theme-dark"];
  }
}

class CardSection extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "";
  }
  materialDom(props) {
    return (
      <section {...props}>
        {props.children}
      </section>
    );
  }
}

class CardPrimary extends CardSection {
  constructor() {
    super();
    this.componentName = "card__primary";
  }
}

class CardSupportingText extends CardSection {
  constructor() {
    super();
    this.componentName = "card__supporting-text";
  }
}

class CardActions extends CardSection {
  constructor() {
    super();
    this.componentName = "card__actions";
    this._mdcProps = ["vertical"];
  }
}

class CardMedia extends CardSection {
  constructor() {
    super();
    this.componentName = "card__media";
  }
}

class CardAction extends Button {
  constructor() {
    super();
    this.componentName = "card__action";
  }
  materialDom(props) {
    return (
      <button
        className="mdc-button mdc-button--compact"
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

class CardTitle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card__title";
    this._mdcProps = ["large"];
  }
  materialDom(props) {
    return (
      <h1 {...props}>
        {props.children}
      </h1>
    );
  }
}

class CardSubtitle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "card__subtitle";
  }
  materialDom(props) {
    return (
      <h2 {...props}>
        {props.children}
      </h2>
    );
  }
}

Card.Primary = CardPrimary;
Card.SupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.Media = CardMedia;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

export default Card;
