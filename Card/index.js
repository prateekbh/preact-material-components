var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
		return h(
			"section",
			props,
			props.children
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
		return h(
			"button",
			_extends({ className: "mdc-button mdc-button--compact" }, props, { ref: control => {
					this.control = control;
				} }),
			props.children
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
		return h(
			"h1",
			props,
			props.children
		);
	}
}

class CardSubtitle extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "card__subtitle";
	}
	materialDom(props) {
		return h(
			"h2",
			props,
			props.children
		);
	}
}

Card.CardPrimary = CardPrimary;
Card.CardSupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.Media = CardMedia;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

export default Card;