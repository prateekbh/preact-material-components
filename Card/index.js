import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Button from "../Button";
class Card extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "card";
	}
	materialDom(props) {
		return (
			<div {...props}>
				{props.children}
			</div>
		);
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
		this._mdcProps=["vertical"];
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
			<button className="mdc-button mdc-button--compact" ref={control=>{this.control = control;}}>
				{props.children}
			</button>
		);
	}
}

class CardTitle extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "card__title";
		this._mdcProps=["large"];
	}
	materialDom(props) {
		return (
			<h1>
				{props.children}
			</h1>
		);
	}
}

class CardSubtitle extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "card__bubtitle";
	}
	materialDom(props) {
		return (
			<h2>
				{props.children}
			</h2>
		);
	}
}


Card.CardPrimary = CardPrimary;
Card.CardSupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.CardMedia = CardMedia;
Card.CardTitle = CardTitle;
Card.CardSubtitle = CardSubtitle;

export default Card;