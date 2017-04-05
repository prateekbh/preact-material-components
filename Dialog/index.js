import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCDialog } from "@material/dialog/";
import Button from "../Button";
/**
 */
class Dialog extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog";
	}
	componentDidMount() {
		this.MDComponent = new MDCDialog(this.control);
	}
	materialDom(props) {
		return (
			<aside
				role="alertdialog"
				aria-hidden="true"
				ref={control=>{this.control = control;}}
				{...props}>
				<div class="mdc-dialog__surface">
					{props.children}
				</div>
				<div class="mdc-dialog__backdrop"></div>
			</aside>
		);
	}
}

class DialogHeader extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog__header";
	}
	materialDom(props) {
		return (
			<header {...props}>
				<h2 id="my-mdc-dialog-label" class="mdc-dialog__header__title">
					{props.children}
				</h2>
			</header>
		);
	}
}

/**
 * @prop scrollable = false
 */
class DialogBody extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog__body";
		this._mdcProps = ["scrollable"];
	}
	materialDom(props) {
		return (
			<section {...props}>
				{props.children}
			</section>
		);
	}
}

class DialogFooter extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "dialog__footer";
	}
	materialDom(props) {
		return (
			<footer {...props}>
				{props.children}
			</footer>
		);
	}
}

/**
 * @prop cancel = false
 * @prop accept = false
 */
class DialogFooterButton extends Button {
	constructor() {
		super();
		this.componentName = "dialog__footer__button";
		this._mdcProps = ["cancel", "accept"];
	}
	materialDom(props) {
		return (
			<button className="mdc-button" ref={control=>{this.control = control;}}>
				{props.children}
			</button>
		);
	}
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

export default Dialog;