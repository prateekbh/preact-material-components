import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop fixed = false
 */
class Toolbar extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "toolbar";
		this._mdcProps = ["fixed"];
	}
	materialDom(props) {
		return (
			<header ref={control=>{this.control = control;}} {...props}>
				<section class="mdc-toolbar__section mdc-toolbar__section--align-start">
					{props.icon && <a class="material-icons">{props.icon}</a>}
					<span class="mdc-toolbar__title">{props.title}</span>
				</section>
				{props.children}
			</header>
		);
	}
}

/**
 * @prop align-end = false
 */
class ToolbarSection extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "toolbar__section";
		this._mdcProps = ["align-end"];
	}
	materialDom(props) {
		return (
			<section>
				{...props}
			</section>
		);
	}
}

Toolbar.Section = ToolbarSection;

export default Toolbar;