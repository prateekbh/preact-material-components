import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSelect } from "@material/select/";
import List from "../List";
class Select extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "select";
    this._mdcProps = ["disabled"];
  }
  componentDidMount() {
    if (!this.props.basic) {
      this.MDComponent = new MDCSelect(this.control);
      this.MDComponent.listen("MDCSelect:change", () => {
        if (this.props.onChange) {
          this.props.onChange();
        }
      });
      this.updateSelection();
    }
  }
  updateSelection(prevProps) {
    if (
      this.props.selectedIndex &&
      this.MDComponent &&
      (!prevProps || prevProps.selectedIndex !== this.props.selectedIndex)
    ) {
      this.MDComponent.selectedIndex = this.props.selectedIndex;
    }
  }
  componentDidUpdate(prevProps) {
    this.updateSelection(prevProps);
  }
  materialDom(props) {
    if (props.basic) {
      return (
        <select
          {...props}
          ref={control => {
            this.control = control;
          }}
        >
          {props.children}
        </select>
      );
    }

    return (
      <div
        role="listbox"
        {...props}
        ref={control => {
          this.control = control;
        }}
      >
        <span className="mdc-select__selected-text">{props.hintText}</span>
        <div className="mdc-simple-menu mdc-select__menu">
          <ul className="mdc-list mdc-simple-menu__items ">
            {props.children}
          </ul>
        </div>
      </div>
    );
  }
}

Select.Item = List.Item;

export default Select;
