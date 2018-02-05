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
    if (!this.MDComponent) return;

    if ("selectedIndex" in this.props) {
      const selectedIndex =
        typeof this.props.selectedIndex === "number"
          ? this.props.selectedIndex
          : -1;

      this.MDComponent.selectedIndex = selectedIndex;
    }

    const selectedIndex = this.MDComponent.selectedIndex;
    if (selectedIndex === -1) {
      this._labelRef.classList.remove("mdc-select__label--float-above");
    } else {
      this._labelRef.classList.add("mdc-select__label--float-above");
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
        <div class="mdc-select__surface" tabindex="0">
          <div
            class="mdc-select__label"
            ref={ref => {
              this._labelRef = ref;
            }}
          >
            {props.hintText}
          </div>
          <div class="mdc-select__selected-text" />
          <div class="mdc-select__bottom-line" />
        </div>
        <div class="mdc-simple-menu mdc-select__menu">
          <ul class="mdc-list mdc-simple-menu__items">{props.children}</ul>
        </div>
      </div>
    );
  }
}

class SelectOption extends List.Item {
  materialDom(props) {
    const disabled = "disabled" in props && !!props["disabled"];
    const selected = "selected" in props && !!props["selected"];

    const baseProps = {
      tabindex: disabled ? "-1" : "0"
    };
    if (disabled) {
      baseProps["aria-disabled"] = "true";
    }
    if (selected) {
      baseProps["aria-selected"] = "true";
    }

    props = Object.assign(baseProps, props);
    if ("disabled" in props) {
      delete props["disabled"];
    }
    if ("selected" in props) {
      delete props["selected"];
    }

    return super.materialDom(props);
  }
}

Select.Item = SelectOption;

export default Select;
