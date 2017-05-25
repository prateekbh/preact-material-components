var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

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
      this.MDComponent.listen("MDCSelect:change", e => {
        e = e || {};
        e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
        e.selectedOptions =
          e.selectedOptions || this.MDComponent.selectedOptions;
        if (this.props.onChange) {
          this.props.onChange(e);
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
      return h(
        "select",
        _extends({}, props, {
          ref: control => {
            this.control = control;
          }
        }),
        props.children
      );
    }

    return h(
      "div",
      _extends(
        {
          role: "listbox"
        },
        props,
        {
          ref: control => {
            this.control = control;
          }
        }
      ),
      h("span", { className: "mdc-select__selected-text" }, props.hintText),
      h(
        "div",
        { className: "mdc-simple-menu mdc-select__menu" },
        h(
          "ul",
          { className: "mdc-list mdc-simple-menu__items " },
          props.children
        )
      )
    );
  }
}

Select.Item = List.Item;

export default Select;
