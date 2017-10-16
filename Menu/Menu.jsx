import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSimpleMenu } from "@material/menu";
import List from "../List";

/*
 * Default props for menu
 */
const defaultProps = {
  open: false
};

/**
 * @prop open = false
 */
class Menu extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "simple-menu";
    this._mdcProps = [
      "open",
      "open-from-top-left",
      "open-from-top-right",
      "open-from-bottom-left",
      "open-from-bottom-right"
    ];
    this._select = this._select.bind(this);
    this._cancel = this._cancel.bind(this);
  }
  componentDidMount() {
    this.MDComponent = new MDCSimpleMenu(this.control);
    this.MDComponent.listen("MDCSimpleMenu:selected", this._select);
    this.MDComponent.listen("MDCSimpleMenu:cancel", this._cancel);
    toggleMenu(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCSimpleMenu:selected", this._select);
    this.MDComponent.unlisten("MDCSimpleMenu:cancel", this._cancel);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  _select() {
    if (this.props.onSelect) {
      this.props.onSelect();
    }
    this._menuClosed();
  }
  _cancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    this._menuClosed();
  }
  _menuClosed() {
    if (this.props.onMenuClosed) {
      this.props.onMenuClosed();
    }
  }
  componentWillUpdate(nextProps) {
    toggleMenu(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
    return (
      <div tabindex="-1" {...props} ref={control => (this.control = control)}>
        <ul
          class="mdc-simple-menu__items mdc-list"
          role="menu"
          aria-hidden="true"
        >
          {props.children}
        </ul>
      </div>
    );
  }
}

class MenuAnchor extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "menu-anchor";
  }
}

/*
 * Function to add declarative opening/closing to drawer
 */
function toggleMenu(oldprops, newprops, menu) {
  if (
    "open" in oldprops &&
    "open" in newprops &&
    oldprops.open !== newprops.open
  ) {
    menu.open = newprops.open;
  }
}

Menu.Anchor = MenuAnchor;
Menu.Item = List.Item;
export default Menu;
