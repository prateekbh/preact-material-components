import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSelect } from "@material/select/";
import List from "../List";
class Select extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "select";
	}
	componentDidMount() {
		this.MDComponent = new MDCSelect(this.control);
	}
	materialDom(props) {
		return (
			<div role="listbox" tabindex="0" {...props} ref={control=>{this.control = control;}}>
				<span class="mdc-select__selected-text">{props.hintText}</span>
				<div class="mdc-simple-menu mdc-select__menu">
					<ul class="mdc-list mdc-simple-menu__items ">
						{props.children}
					</ul>
				</div>
			</div>
		);
	}
}

Select.Item = List.Item;

export default Select;