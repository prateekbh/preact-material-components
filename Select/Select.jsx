import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSelect } from "@material/select/";
import List from "../List";
class Select extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "select";
    this._mdcProps = ["disabled"];
    this._changed = this._changed.bind(this);
  }
  _changed(e) {
    e = e || {};
    e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
    e.selectedOptions = e.selectedOptions || this.MDComponent.selectedOptions;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  componentDidMount() {
    if (!this.props.basic) {
      this.MDComponent = new MDCSelect(this.control);
      this.MDComponent.listen("MDCSelect:change", this._changed);
      this.updateSelection();
    }
  }
  componentWillUnmount() {
    if (!this.props.basic) {
      this.MDComponent.unlisten("MDCSelect:change", this._changed);
      this.MDComponent.destroy && this.MDComponent.destroy();
    }
  }
  updateSelection() {
    if (
      "selectedIndex" in this.props &&
      this.props.selectedIndex != null &&
      this.MDComponent
    ) {
      this.MDComponent.selectedIndex = this.props.selectedIndex;
    }
    if (this.MDComponent && this.MDComponent.foundation_) {
      this.MDComponent.foundation_.resize();
      if (
        this.props.selectedIndex === null ||
        this.props.selectedIndex === -1
      ) {
        this.MDComponent.foundation_.adapter_.setSelectedTextContent(
          this.props.hintText
        );
      }
    }
  }
  componentDidUpdate() {
    this.updateSelection();
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
        <div class="mdc-select__surface">
          <div class="mdc-select__label">{props.hintText}</div>
          <div class="mdc-select__selected-text" />
          <div class="mdc-select__bottom-line" />
        </div>
        <div className="mdc-simple-menu mdc-select__menu">
          <ul className="mdc-list mdc-simple-menu__items">{props.children}</ul>
        </div>
      </div>
    );
  }
}

Select.Item = List.Item;

export default Select;
