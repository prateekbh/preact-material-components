import {h, Component} from 'preact';
import * as select from '@material/select';
import autoInit from '@material/auto-init';

export default class Select extends Component {
	constructor(){
		super();
		this.componentName='checkbox';
	}
	componentDidMount() {
		new select.MDCSelect(this.cb);
	}
	render() {
		return(
			<div className="mdc-select" role="listbox" tabindex="0" ref={cb=>{this.cb=cb}} {...this.props}>
				<span className="mdc-select__selected-text">Pick a food group</span>
				<div className="mdc-simple-menu mdc-select__menu">
					<ul className="mdc-list mdc-simple-menu__items">
					<li className="mdc-list-item" role="option" id="grains" tabindex="0">
						Bread, Cereal, Rice, and Pasta
					</li>
					<li className="mdc-list-item" role="option" id="vegetables" tabindex="0">
						Vegetables
					</li>
					<li className="mdc-list-item" role="option" id="fruit" tabindex="0">
						Fruit
					</li>
					<li className="mdc-list-item" role="option" id="dairy" tabindex="0">
						Milk, Yogurt, and Cheese
					</li>
					<li className="mdc-list-item" role="option" id="meat" tabindex="0">
						Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
					</li>
					<li className="mdc-list-item" role="option" id="fats" tabindex="0">
						Fats, Oils, and Sweets
					</li>
					</ul>
				</div>
			</div>
		);
	}
}